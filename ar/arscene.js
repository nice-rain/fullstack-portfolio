var stats = new Stats();
			stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
			document.body.appendChild( stats.domElement );
	
			var renderer = new THREE.WebGLRenderer({
				// antialias	: true,
				alpha: true
			});
			renderer.setClearColor(new THREE.Color('lightgrey'), 0)
			// renderer.setPixelRatio( 2 );
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.domElement.style.position = 'absolute'
			renderer.domElement.style.top = '0px'
			renderer.domElement.style.left = '0px'
			document.body.appendChild( renderer.domElement );

			// init scene and camera
			var scene = new THREE.Scene();
			var camera = new THREE.Camera();
			scene.add(camera);

			var markerGroup = new THREE.Group();
			scene.add(markerGroup);
		
			var source = new THREEAR.Source({ renderer, camera });

			THREEAR.initialize({
				source: source,
				canvasWidth: 80*3,
				canvasHeight: 60*3,
				maxDetectionRate: 30
			}).then((controller) => {

				var texture = new THREE.TextureLoader().load( 'resources/resume-head.png' );
				var geometry = new THREE.CubeGeometry(2.55,0.01,3.3);
				var material = new THREE.MeshBasicMaterial({map: texture}); 
				var cube = new THREE.Mesh( geometry, material );
				cube.position.y	= geometry.parameters.height / 2;
				markerGroup.add(cube);

				//Plane geometry added to scene with resume on it
				// var texture = new THREE.TextureLoader().load( 'resources/resume-head.png' );
				// var geometry = new THREE.PlaneGeometry( 11, 8, 1 );
				// var material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
				// var plane = new THREE.Mesh( geometry, material );
				// scene.add( plane );

				// var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
				// var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
				// var plane = new THREE.Mesh( geometry, material );
				// scene.add( plane );

				//Our custom marker to be detected
				var patternMarker = new THREEAR.PatternMarker({
					patternUrl: 'data/patt.hiro',
					markerObject: markerGroup
				});

				controller.trackMarker(patternMarker);

				// run the rendering loop
				var lastTimeMsec = 0;
				requestAnimationFrame(function animate(nowMsec){

					// measure time
					lastTimeMsec = lastTimeMsec || nowMsec-1000/60;
					var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
					lastTimeMsec = nowMsec;
					// call each update function
					controller.update( source.domElement );

					cube.rotation.x = -40;
					cube.position.x = 2;

					// torus.rotation.y += deltaMsec/1000 * Math.PI
					// torus.rotation.z += deltaMsec/1000 * Math.PI
					renderer.render( scene, camera );

					stats.update();

					// keep looping
					requestAnimationFrame( animate );

				});

			});