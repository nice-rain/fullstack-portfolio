(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/app.actions.ts":
/*!****************************************!*\
  !*** ./src/app/actions/app.actions.ts ***!
  \****************************************/
/*! exports provided: SET_SLIDEOUT_VISIBILITY, GET_RESTAURANTS, GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS, GET_RESTAURANTS_ERROR, UPDATE_LOCATION, SET_LOADING, SetSlideoutVisibility, SetLoading, GetRestaurants, GetRestaurantsSuccess, UpdateLocation, GetRestaurantsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SLIDEOUT_VISIBILITY", function() { return SET_SLIDEOUT_VISIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESTAURANTS", function() { return GET_RESTAURANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESTAURANTS_REQUEST", function() { return GET_RESTAURANTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESTAURANTS_SUCCESS", function() { return GET_RESTAURANTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESTAURANTS_ERROR", function() { return GET_RESTAURANTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOCATION", function() { return UPDATE_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSlideoutVisibility", function() { return SetSlideoutVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLoading", function() { return SetLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRestaurants", function() { return GetRestaurants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRestaurantsSuccess", function() { return GetRestaurantsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLocation", function() { return UpdateLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRestaurantsError", function() { return GetRestaurantsError; });
var SET_SLIDEOUT_VISIBILITY = '[APP] Set Sidebar Visibilty';
var GET_RESTAURANTS = '[APP] Get Restaurants';
var GET_RESTAURANTS_REQUEST = '[APP] Get Restaurants Request';
var GET_RESTAURANTS_SUCCESS = '[APP] Get Restaurants Success';
var GET_RESTAURANTS_ERROR = '[APP] Get Restaurants Error';
var UPDATE_LOCATION = '[APP] Update Location';
var SET_LOADING = '[APP] Set Loading';
var SetSlideoutVisibility = /** @class */ (function () {
    //We will pass the bool + cardID
    function SetSlideoutVisibility(payload) {
        this.payload = payload;
        this.type = SET_SLIDEOUT_VISIBILITY;
    }
    return SetSlideoutVisibility;
}());

//Dispatches to display our loading screen
var SetLoading = /** @class */ (function () {
    //We will pass whether or not to show loading screens
    function SetLoading(payload) {
        this.payload = payload;
        this.type = SET_LOADING;
    }
    return SetLoading;
}());

//Dispatches our effect
var GetRestaurants = /** @class */ (function () {
    function GetRestaurants() {
        this.type = GET_RESTAURANTS;
    }
    return GetRestaurants;
}());

//Returned if we successfully get restaurants
var GetRestaurantsSuccess = /** @class */ (function () {
    // Used any here. 
    // Tried to use a Restaurants interface but not sure where to refactor it all at
    function GetRestaurantsSuccess(payload) {
        this.payload = payload;
        this.type = GET_RESTAURANTS_SUCCESS;
    }
    return GetRestaurantsSuccess;
}());

//Used to update our coordinates within our state
var UpdateLocation = /** @class */ (function () {
    function UpdateLocation(payload) {
        this.payload = payload;
        this.type = UPDATE_LOCATION;
    }
    return UpdateLocation;
}());

//Returned if we end up with an error
var GetRestaurantsError = /** @class */ (function () {
    function GetRestaurantsError(payload) {
        this.payload = payload;
        this.type = GET_RESTAURANTS_ERROR;
    }
    return GetRestaurantsError;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n    background-color:#43E895;\n    color:white;\n    display:flex;\n    height:60px;\n}\nheader button{\n    flex-grow:0;\n    width:100px;\n    height:auto;\n    color:white;\n    background:none;\n    padding:10px;\n    border:none;\n}\nh1{\n    flex-grow:1;\n    text-align:center;\n    align-self:center;\n    margin:0;\n    font-size:17px;\n    font-weight:600;\n}\n/*Container for Details and List views*/\nmain\n{\n    /* overflow-y: scroll; */\n    overflow-x: hidden;\n    height:calc(100vh - 60px);\n    background-color:white;\n    position:relative;\n}\n/*Style our details for slideout*/\napp-restaurant-details{\n    position:absolute;\n    top:0;\n    right:0;\n    z-index:2;\n    height:100%;\n    background-color:white;\n    width:0%;\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n.inner{\n    overflow-y:scroll;\n        height:100%;\n}\n/*Quick class to fix layout issues*/\n.button-container\n{\n    flex-grow:0;\n    width:100px;\n    height:auto;\n    background:none;\n    display:inline-flex;\n    border:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUEsdUNBQXVDO0FBQ3ZDOztJQUVJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxpQkFBaUI7SUFDakIsS0FBSztJQUNMLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUJBQWlCO1FBQ2IsV0FBVztBQUNuQjtBQUVBLG1DQUFtQztBQUNuQzs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzQzRTg5NTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgaGVpZ2h0OjYwcHg7XG59XG5oZWFkZXIgYnV0dG9ue1xuICAgIGZsZXgtZ3JvdzowO1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDphdXRvO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYm9yZGVyOm5vbmU7XG59XG5cbmgxe1xuICAgIGZsZXgtZ3JvdzoxO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQtc2l6ZToxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbn1cblxuLypDb250YWluZXIgZm9yIERldGFpbHMgYW5kIExpc3Qgdmlld3MqL1xubWFpblxue1xuICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgaGVpZ2h0OmNhbGMoMTAwdmggLSA2MHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4vKlN0eWxlIG91ciBkZXRhaWxzIGZvciBzbGlkZW91dCovXG5hcHAtcmVzdGF1cmFudC1kZXRhaWxze1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OjA7XG4gICAgei1pbmRleDoyO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgd2lkdGg6MCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5pbm5lcntcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG59XG5cbi8qUXVpY2sgY2xhc3MgdG8gZml4IGxheW91dCBpc3N1ZXMqL1xuLmJ1dHRvbi1jb250YWluZXJcbntcbiAgICBmbGV4LWdyb3c6MDtcbiAgICB3aWR0aDoxMDBweDtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBib3JkZXI6bm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <div class=\"button-container\">\n    <button *ngIf=\"state.slideoutIsVisible\" (click)=\"closeDetails()\">Back</button>\n  </div>\n  <h1>Lunch Tyme</h1>\n  <button (click)=\"fetchLocation()\">Map</button>\n</header>\n<main>\n  <!-- Only display info screen when we have no restaurants or there is an error -->\n  <app-info-screen *ngIf=\"!state.restaurants || state.error\"></app-info-screen>\n\n  <!-- These two components will display  -->\n  <div class=\"inner\" *ngIf=\"state.restaurants && !state.error\">\n    <app-restaurant-list></app-restaurant-list>\n  </div>\n  <app-restaurant-details *ngIf=\"state.restaurants && !state.error\" [ngStyle]=\"{'width': (state.slideoutIsVisible) && '100%' || '0%'}\"></app-restaurant-details>\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/app.actions */ "./src/app/actions/app.actions.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        var _this = this;
        this.store = store;
        this.title = 'angular-lunch-tyme';
        this.stateObservable = this.store.select('app');
        this.subscription = this.stateObservable.pipe().subscribe(function (data) {
            _this.state = data;
        });
    }
    //Function to dispatch and action and close our details panel.
    AppComponent.prototype.closeDetails = function () {
        console.log('close our details');
        this.store.dispatch(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__["SetSlideoutVisibility"]({ newVisibility: false, cardId: 0 }));
    };
    //If location succeeds, store location data and get restaurants
    AppComponent.prototype.fetchLocation = function () {
        var _this = this;
        //dispatch our loading screen
        this.store.dispatch(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__["SetLoading"](true));
        //Notify onclick
        console.log('fetch location');
        // We need to display our spinner here to demonstrate loading
        // The Location API takes ages for some reason.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log('get position success');
                console.log(position.coords);
                //Note: Technically this should refactor into 1 dispatch
                //Dispatch store our location
                _this.store.dispatch(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateLocation"](position.coords));
                //Dispatch get restaurants
                console.log('Dispatching getRestaurants');
                _this.store.dispatch(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__["GetRestaurants"]());
            }, function (error) {
                console.log(error);
                _this.store.dispatch(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__["GetRestaurantsError"](error.message));
            }, { timeout: 10000 });
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    //clean up our subscription
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/app.reducer */ "./src/app/reducers/app.reducer.ts");
/* harmony import */ var _effects_app_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/app.effects */ "./src/app/effects/app.effects.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant-list/restaurant-list.component */ "./src/app/restaurant-list/restaurant-list.component.ts");
/* harmony import */ var _restaurant_card_restaurant_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restaurant-card/restaurant-card.component */ "./src/app/restaurant-card/restaurant-card.component.ts");
/* harmony import */ var _restaurant_details_restaurant_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restaurant-details/restaurant-details.component */ "./src/app/restaurant-details/restaurant-details.component.ts");
/* harmony import */ var _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./google-maps/google-maps.component */ "./src/app/google-maps/google-maps.component.ts");
/* harmony import */ var _info_screen_info_screen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./info-screen/info-screen.component */ "./src/app/info-screen/info-screen.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantListComponent"],
                _restaurant_card_restaurant_card_component__WEBPACK_IMPORTED_MODULE_11__["RestaurantCardComponent"],
                _restaurant_details_restaurant_details_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantDetailsComponent"],
                _google_maps_google_maps_component__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsComponent"],
                _info_screen_info_screen_component__WEBPACK_IMPORTED_MODULE_14__["InfoScreenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAhNYdJL4sdkiaVTv_wDoiCaLt8TWXf1XI'
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                    app: _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot(_effects_app_effects__WEBPACK_IMPORTED_MODULE_8__["effects"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    //Http request that will return an observable response (restaurants.json)
    AppService.prototype.getRestaurants = function () {
        return this.http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Failed to fetch restaurant list."); }));
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/effects/app.effects.ts":
/*!****************************************!*\
  !*** ./src/app/effects/app.effects.ts ***!
  \****************************************/
/*! exports provided: AppEffects, effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/app.actions */ "./src/app/actions/app.actions.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");







var AppEffects = /** @class */ (function () {
    function AppEffects(actions$, appService) {
        var _this = this;
        this.actions$ = actions$;
        this.appService = appService;
        this.getRestaurants$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_app_actions__WEBPACK_IMPORTED_MODULE_5__["GET_RESTAURANTS"]), 
        //switchMap is blocking and cancels all requests when called
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.appService.getRestaurants().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new _actions_app_actions__WEBPACK_IMPORTED_MODULE_5__["GetRestaurantsSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_5__["GetRestaurantsError"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppEffects.prototype, "getRestaurants$", void 0);
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]])
    ], AppEffects);
    return AppEffects;
}());

var effects = [AppEffects];


/***/ }),

/***/ "./src/app/google-maps/google-maps.component.css":
/*!*******************************************************!*\
  !*** ./src/app/google-maps/google-maps.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 180px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLW1hcHMvZ29vZ2xlLW1hcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1tYXBzL2dvb2dsZS1tYXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/google-maps/google-maps.component.html":
/*!********************************************************!*\
  !*** ./src/app/google-maps/google-maps.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.state.restaurants && (this.state.selectedCardId || this.state.selectedCardId === 0)\">\n    <agm-map [latitude]=\"this.state.restaurants[this.state.selectedCardId].location.lat\" [longitude]=\"this.state.restaurants[this.state.selectedCardId].location.lng\" [zoom]=\"zoom\" *ngIf=\"this.state.coordinates\">\n            <agm-marker \n                [latitude]=\"this.state.coordinates.latitude\" \n                [longitude]=\"this.state.coordinates.longitude\" \n                [iconUrl]=\"icon\">\n            </agm-marker>\n    </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/google-maps/google-maps.component.ts":
/*!******************************************************!*\
  !*** ./src/app/google-maps/google-maps.component.ts ***!
  \******************************************************/
/*! exports provided: GoogleMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function() { return GoogleMapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



//import * as AppActions from '../actions/app.actions';
var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent(store) {
        var _this = this;
        this.store = store;
        this.title = 'angular-lunch-tyme';
        this.zoom = 18;
        this.icon = {
            url: './assets/bullet_blue.png',
            scaledSize: {
                width: 45,
                height: 45
            }
        };
        this.stateObservable = this.store.select('app');
        this.subscription = this.stateObservable.pipe().subscribe(function (data) {
            _this.state = data;
        });
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    //clean up our subscription
    GoogleMapsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    GoogleMapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-maps',
            template: __webpack_require__(/*! ./google-maps.component.html */ "./src/app/google-maps/google-maps.component.html"),
            styles: [__webpack_require__(/*! ./google-maps.component.css */ "./src/app/google-maps/google-maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ "./src/app/info-screen/info-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/info-screen/info-screen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n    color: #777777;\n    font-size: 90px;\n    text-indent: -9999em;\n    overflow: hidden;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    margin: 250px auto;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n    animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  }\n  @-webkit-keyframes load6 {\n    0% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    5%,\n    95% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    10%,\n    59% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n    }\n    20% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n    }\n    38% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n    }\n    100% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n  }\n  @keyframes load6 {\n    0% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    5%,\n    95% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    10%,\n    59% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n    }\n    20% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n    }\n    38% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n    }\n    100% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n  }\n  @-webkit-keyframes round {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes round {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  .message\n{\n    text-align:center;\n    padding-top:20%;\n    color:#555;\n}\n  .error{\n    color: red;\n}\n  .error-text\n{\n    margin-top:40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1zY3JlZW4vaW5mby1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUVoQyx3QkFBd0I7SUFDeEIscUVBQXFFO0lBQ3JFLDZEQUE2RDtFQUMvRDtFQUNBO0lBQ0U7TUFDRSxtSEFBbUg7SUFDckg7SUFDQTs7TUFFRSxtSEFBbUg7SUFDckg7SUFDQTs7TUFFRSxtSkFBbUo7SUFDcko7SUFDQTtNQUNFLGtKQUFrSjtJQUNwSjtJQUNBO01BQ0UsZ0pBQWdKO0lBQ2xKO0lBQ0E7TUFDRSxtSEFBbUg7SUFDckg7RUFDRjtFQUNBO0lBQ0U7TUFDRSxtSEFBbUg7SUFDckg7SUFDQTs7TUFFRSxtSEFBbUg7SUFDckg7SUFDQTs7TUFFRSxtSkFBbUo7SUFDcko7SUFDQTtNQUNFLGtKQUFrSjtJQUNwSjtJQUNBO01BQ0UsZ0pBQWdKO0lBQ2xKO0lBQ0E7TUFDRSxtSEFBbUg7SUFDckg7RUFDRjtFQUNBO0lBQ0U7TUFDRSwrQkFBK0I7TUFDL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBaUM7TUFDakMseUJBQXlCO0lBQzNCO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsK0JBQStCO01BQy9CLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQWlDO01BQ2pDLHlCQUF5QjtJQUMzQjtFQUNGO0VBR0Y7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7RUFFQTtJQUNJLFVBQVU7QUFDZDtFQUVBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbmZvLXNjcmVlbi9pbmZvLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xuICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMjUwcHggYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xuICAgIGFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ2IHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgIH1cbiAgICA1JSxcbiAgICA5NSUge1xuICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcbiAgICB9XG4gICAgMTAlLFxuICAgIDU5JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcbiAgICB9XG4gICAgMzglIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWQ2IHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgIH1cbiAgICA1JSxcbiAgICA5NSUge1xuICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcbiAgICB9XG4gICAgMTAlLFxuICAgIDU5JSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcbiAgICB9XG4gICAgMzglIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xuICAgIH1cbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHJvdW5kIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuXG4ubWVzc2FnZVxue1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHBhZGRpbmctdG9wOjIwJTtcbiAgICBjb2xvcjojNTU1O1xufVxuXG4uZXJyb3J7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmVycm9yLXRleHRcbntcbiAgICBtYXJnaW4tdG9wOjQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/info-screen/info-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/info-screen/info-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default display when app starts -->\n<section *ngIf=\"!state.restaurants && !state.error && !state.isLoading\" class=\"message\">\n  <h1>Welcome to Lunch Tyme!</h1>\n  <p>Click the map button above to find food!</p>\n</section>\n<!-- Loading Spinner -->\n<section class=\"spinner\" *ngIf=\"!state.error && state.isLoading\"></section>\n<!-- Error Message -->\n<section *ngIf=\"state.error\" class=\"message error\">\n  <h1>Oops something went wrong...</h1>\n  <pre>{{state.error}}</pre>\n</section>"

/***/ }),

/***/ "./src/app/info-screen/info-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/info-screen/info-screen.component.ts ***!
  \******************************************************/
/*! exports provided: InfoScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoScreenComponent", function() { return InfoScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var InfoScreenComponent = /** @class */ (function () {
    function InfoScreenComponent(store) {
        var _this = this;
        this.store = store;
        this.title = 'angular-lunch-tyme';
        this.stateObservable = this.store.select('app');
        this.subscription = this.stateObservable.pipe().subscribe(function (data) {
            _this.state = data;
        });
    }
    InfoScreenComponent.prototype.ngOnInit = function () {
    };
    //clean up our subscription
    InfoScreenComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    InfoScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-screen',
            template: __webpack_require__(/*! ./info-screen.component.html */ "./src/app/info-screen/info-screen.component.html"),
            styles: [__webpack_require__(/*! ./info-screen.component.css */ "./src/app/info-screen/info-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], InfoScreenComponent);
    return InfoScreenComponent;
}());



/***/ }),

/***/ "./src/app/reducers/app.reducer.ts":
/*!*****************************************!*\
  !*** ./src/app/reducers/app.reducer.ts ***!
  \*****************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/app.actions */ "./src/app/actions/app.actions.ts");

// Section 1
var initialState = {
    slideoutIsVisible: false,
    restaurants: null,
    selectedCardId: 0,
    coordinates: null,
    error: null,
    isLoading: false
};
// Section 2
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    // Section 3
    switch (action.type) {
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_SLIDEOUT_VISIBILITY"]:
            console.log("Action: Set_Slideout_Visibility");
            //console.log(action.payload);
            return Object.assign({}, state, { slideoutIsVisible: action.payload.newVisibility, selectedCardId: action.payload.cardId });
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["GET_RESTAURANTS_SUCCESS"]:
            console.log("Action: Get Restaurants Success");
            //console.log(action.payload);
            return Object.assign({}, state, { restaurants: action.payload.restaurants, isLoading: false });
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["GET_RESTAURANTS_ERROR"]:
            console.log("Action: Get Restaurants Error");
            return Object.assign({}, state, { isLoading: false, error: action.payload });
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LOCATION"]:
            console.log("Action: Update Location");
            return Object.assign({}, state, { coordinates: action.payload });
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
            console.log("Action: set loading");
            return Object.assign({}, state, { isLoading: action.payload, error: null });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/restaurant-card/restaurant-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/restaurant-card/restaurant-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    height:180px;\n    background-size: cover; \n    position: relative;\n}\n\n/*Container for name and type*/\n\n.card-text\n{\n    color:white; \n    position:absolute;\n    bottom:6px;\n    left:12px;\n}\n\n.card-text h2\n{\n    margin:0;\n    font-weight:bold;\n    padding-bottom:6px;\n    font-size:16px;\n}\n\n.card-text p{\n    font-size:12px;\n    font-weight:normal;\n    padding:0;\n    margin:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC1jYXJkL3Jlc3RhdXJhbnQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUEsOEJBQThCOztBQUM5Qjs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQtY2FyZC9yZXN0YXVyYW50LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIGhlaWdodDoxODBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qQ29udGFpbmVyIGZvciBuYW1lIGFuZCB0eXBlKi9cbi5jYXJkLXRleHRcbntcbiAgICBjb2xvcjp3aGl0ZTsgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYm90dG9tOjZweDtcbiAgICBsZWZ0OjEycHg7XG59XG5cbi5jYXJkLXRleHQgaDJcbntcbiAgICBtYXJnaW46MDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHBhZGRpbmctYm90dG9tOjZweDtcbiAgICBmb250LXNpemU6MTZweDtcbn1cblxuLmNhcmQtdGV4dCBwe1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/restaurant-card/restaurant-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/restaurant-card/restaurant-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"openDetails(1)\" [ngStyle]=\"{'background': 'linear-gradient(#00000000, #000000DD), url(' + restaurantImage + '), no-repeat center'}\">\n  <div class=\"card-text\">\n    <h2>{{restaurantName}}</h2>\n    <p>{{restaurantCategory}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/restaurant-card/restaurant-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurant-card/restaurant-card.component.ts ***!
  \**************************************************************/
/*! exports provided: RestaurantCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantCardComponent", function() { return RestaurantCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions/app.actions */ "./src/app/actions/app.actions.ts");




var RestaurantCardComponent = /** @class */ (function () {
    function RestaurantCardComponent(store) {
        this.store = store;
    }
    //Onclick function to open Details and pass the ID across for populating it
    RestaurantCardComponent.prototype.openDetails = function (restaurantId) {
        console.log("Opening details for restaurant: " + restaurantId);
        //Need to tell our app module to set our maps css width to 100%
        this.store.dispatch(new _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__["SetSlideoutVisibility"]({ newVisibility: true, cardId: this.cardIndex }));
    };
    RestaurantCardComponent.prototype.ngOnInit = function () {
        console.log(this.restaurantImage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RestaurantCardComponent.prototype, "cardIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RestaurantCardComponent.prototype, "restaurantImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RestaurantCardComponent.prototype, "restaurantName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RestaurantCardComponent.prototype, "restaurantCategory", void 0);
    RestaurantCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-card',
            template: __webpack_require__(/*! ./restaurant-card.component.html */ "./src/app/restaurant-card/restaurant-card.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-card.component.css */ "./src/app/restaurant-card/restaurant-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RestaurantCardComponent);
    return RestaurantCardComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-details/restaurant-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/restaurant-details/restaurant-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container\n{\n    height:180px;\n}\n\n/*Full-size colored background*/\n\n.details-head\n{\n    height:60px;\n    background-color: #34B379;\n    position:relative;\n}\n\n/*Container for name and type*/\n\n.details-head-text\n{\n    color:white; \n    position:absolute;\n    bottom:6px;\n    left:12px;\n}\n\n.details-head-text h2\n{\n    margin:0;\n    font-weight:bold;\n    padding-bottom:6px;\n    font-size:16px;\n}\n\n.details-head-text p{\n    font-size:12px;\n    font-weight:normal;\n    padding:0;\n    margin:0;\n}\n\n.information{\n    margin-top:16px;\n    margin-left:12px;\n}\n\n.information p{\n    margin-top:0;\n    margin-bottom:26px;\n    font-size:16px;\n    color:#2a2a2a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC1kZXRhaWxzL3Jlc3RhdXJhbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUEsK0JBQStCOztBQUMvQjs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBQzlCOztJQUVJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50LWRldGFpbHMvcmVzdGF1cmFudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lclxue1xuICAgIGhlaWdodDoxODBweDtcbn1cblxuLypGdWxsLXNpemUgY29sb3JlZCBiYWNrZ3JvdW5kKi9cbi5kZXRhaWxzLWhlYWRcbntcbiAgICBoZWlnaHQ6NjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRCMzc5O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4vKkNvbnRhaW5lciBmb3IgbmFtZSBhbmQgdHlwZSovXG4uZGV0YWlscy1oZWFkLXRleHRcbntcbiAgICBjb2xvcjp3aGl0ZTsgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYm90dG9tOjZweDtcbiAgICBsZWZ0OjEycHg7XG59XG5cbi5kZXRhaWxzLWhlYWQtdGV4dCBoMlxue1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgcGFkZGluZy1ib3R0b206NnB4O1xuICAgIGZvbnQtc2l6ZToxNnB4O1xufVxuXG4uZGV0YWlscy1oZWFkLXRleHQgcHtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xufVxuXG4uaW5mb3JtYXRpb257XG4gICAgbWFyZ2luLXRvcDoxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OjEycHg7XG59XG5cbi5pbmZvcm1hdGlvbiBwe1xuICAgIG1hcmdpbi10b3A6MDtcbiAgICBtYXJnaW4tYm90dG9tOjI2cHg7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgY29sb3I6IzJhMmEyYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/restaurant-details/restaurant-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/restaurant-details/restaurant-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Restaurant Details with Google Map Layout -->\n<section class=\"map-container\">\n  <app-google-maps></app-google-maps>\n</section>\n<section *ngIf=\"state.restaurants\">\n  <div class=\"details-head\">\n    <div class=\"details-head-text\">\n        <h2>{{state.restaurants[state.selectedCardId].name}}</h2>\n        <p>{{state.restaurants[state.selectedCardId].category}}</p>\n    </div>\n  </div>\n  <div class=\"information\" >\n    <p *ngIf=\"state.restaurants[state.selectedCardId].location\">\n      {{state.restaurants[state.selectedCardId].location.address}}<br/>\n      {{state.restaurants[state.selectedCardId].location.city}}, {{state.restaurants[state.selectedCardId].location.state}} {{state.restaurants[state.selectedCardId].location.postalCode}}\n    </p>\n    <p *ngIf=\"state.restaurants[state.selectedCardId].contact\">\n        {{state.restaurants[state.selectedCardId].contact.formattedPhone}}\n    </p>\n    <p *ngIf=\"state.restaurants[state.selectedCardId].contact && state.restaurants[state.selectedCardId].contact.twitter\">\n      @{{state.restaurants[state.selectedCardId].contact.twitter}}\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/restaurant-details/restaurant-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-details/restaurant-details.component.ts ***!
  \********************************************************************/
/*! exports provided: RestaurantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailsComponent", function() { return RestaurantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var RestaurantDetailsComponent = /** @class */ (function () {
    //Note: I honestly tried 20 ways to use the | async, but this just works.
    function RestaurantDetailsComponent(store) {
        var _this = this;
        this.store = store;
        this.stateObservable = this.store.select('app');
        this.subscription = this.stateObservable.pipe().subscribe(function (data) {
            _this.state = data;
        });
        console.log('component state');
        console.log(this.state);
    }
    RestaurantDetailsComponent.prototype.ngOnInit = function () {
    };
    //clean up our subscription
    RestaurantDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RestaurantDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-details',
            template: __webpack_require__(/*! ./restaurant-details.component.html */ "./src/app/restaurant-details/restaurant-details.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-details.component.css */ "./src/app/restaurant-details/restaurant-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RestaurantDetailsComponent);
    return RestaurantDetailsComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-list/restaurant-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/restaurant-list/restaurant-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 600px) {\n    .content{\n        display:flex;\n        flex-wrap: wrap;\n        height:100%;\n        width:100%;\n    }\n\n    app-restaurant-card{\n        width:50%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC1saXN0L3Jlc3RhdXJhbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQtbGlzdC9yZXN0YXVyYW50LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGVudHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cblxuICAgIGFwcC1yZXN0YXVyYW50LWNhcmR7XG4gICAgICAgIHdpZHRoOjUwJTtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/restaurant-list/restaurant-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/restaurant-list/restaurant-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\" *ngIf=\"state.restaurants\">\n  <app-restaurant-card *ngFor=\"let restaurant of state.restaurants; let i = index\" \n    [cardIndex]=i \n    [restaurantImage]=restaurant.backgroundImageURL\n    [restaurantName]=restaurant.name\n    [restaurantCategory]=restaurant.category>\n  </app-restaurant-card>\n</section>\n\n"

/***/ }),

/***/ "./src/app/restaurant-list/restaurant-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurant-list/restaurant-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RestaurantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantListComponent", function() { return RestaurantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var RestaurantListComponent = /** @class */ (function () {
    //Note: I honestly tried 20 ways to use the | async, but this just works.
    function RestaurantListComponent(store) {
        var _this = this;
        this.store = store;
        this.stateObservable = this.store.select('app');
        this.subscription = this.stateObservable.pipe().subscribe(function (data) {
            _this.state = data;
            //Log our state
            console.log('list loaded');
            console.log(_this.state);
        });
    }
    RestaurantListComponent.prototype.ngOnInit = function () {
    };
    //clean up our subscription
    RestaurantListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RestaurantListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-list',
            template: __webpack_require__(/*! ./restaurant-list.component.html */ "./src/app/restaurant-list/restaurant-list.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-list.component.css */ "./src/app/restaurant-list/restaurant-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RestaurantListComponent);
    return RestaurantListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/walker.twyman/Documents/Projects/Github/angular-lunch-tyme/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map