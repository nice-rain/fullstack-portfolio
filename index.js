'use strict'

//Global Variables - To be written to sessionstorage
let isDarkTheme = false;

//Called when we successfully send a message
//Hides our entire form and displays a message that we sent our message
//Should give a link to click to unhide our form again for another message
function onSendSuccess()
{
    //Send our GA event that the user sent an email
    if(gtag)
    {
        gtag('event', 'click', {
            'event_category': 'contact',
            'event_label': 'submit'
        });
    }
    
    //If our request was successful, hide and reset our form here, then show our success message
    $('.js-contact-form').hide();
    $('.js-contact-form')[0].reset();
    $('.success-message').show();
}

function onSendFail()
{
    $('.js-contact-form').hide();
    $('.js-contact-form')[0].reset();
    $('.failure-message').show();
}

//Function that sends our email request to our server
function sendEmailRequest()
{
    //console.log("Function: SendEmailRequest");
       
        //Store our contact form
        const contactForm = $('.js-contact-form');

        //Prepare and send our ajax request
       const request = {
        url: "https://api.nicera.in/contact",
        method: "POST",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
             "name": contactForm.find('#Name').val(),
             "subject" : contactForm.find('#Subject').val(),
             "email" : contactForm.find('#Email').val(),
             "message" : contactForm.find('#Message').val()
            })
    }

    //console.log(request.data);
    //Declare and send our ajax request
    let ajaxRequest = $.ajax(request);

    //Promise when request is sent and successful
    ajaxRequest.done((data, textStatus, xhr)=>{
        //console.log("Successfully Sent Request");
        //console.log(xhr.status);
        onSendSuccess();
    });

    //Promise when our request fails
    ajaxRequest.fail((err)=>{
        console.log("Data error");
        console.log(err);
        onSendFail();
    });
}

//Binds our submit button
function bindSubmit()
{
    $('.js-contact-form').submit((event) =>{
        //console.log("submit button clicked");
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);

        //Call our email request
        sendEmailRequest();

    });
}

//binds our restore form link
function bindRestoreFormLink()
{
    $('.js-restore-form').on("click", (event)=>{
        //console.log("Restore Form Clicked");

        //Simple hide/show for our elements
        $('.success-message').hide();
        $('.failure-message').hide();
        $('.js-contact-form').show();
        
    });
}



function setDarkTheme()
{
    console.log('setting dark theme');
    //Change all of our css properties to dark ones
    $('.fa-sun').hide();
    $('.fa-moon').show();
    

    const rootElement = document.querySelector(':root')
    const darkTheme = {
        '--text-color': '#bbb',
        '--bg-color': '#222',
        '--heading-font-color': '#eee',
        '--darker-section': '#292929'
    }
    for(let style in darkTheme) {
        rootElement.style.setProperty(style, darkTheme[style])
    }

    isDarkTheme = true;

}

function setLightTheme()
{
    console.log('setting light theme');

    $('.fa-sun').show();
    $('.fa-moon').hide();

    //Change all of our css properties to light ones
    const rootElement = document.querySelector(':root')
    const lightTheme = {
        '--text-color': '#777',
        '--bg-color': '#FFF',
        '--heading-font-color': '#111',
        '--darker-section': '#eee'
    }
    for(let style in lightTheme) {
        rootElement.style.setProperty(style, lightTheme[style])
    }

    isDarkTheme = false;
}

//Function that will determine whether or not we should load a dark theme
function loadColorTheme()
{
    //Fetch variable from localStorage

    //if variable || prefers-color-scheme: dark

        //Do dark theme logic here
    
    //if !variable || prefers-color-scheme: light
    
        //Set it to light theme here

    // If we want, we can use a enum (rather than bool) for var
    // If variable === 'CYCLE'
        // if(isNotSpecified || hasNoSupport) {
        //     console.log('You specified no preference for a color scheme or your browser does not support it. I Schedule dark mode during night time.')
        //     now = new Date();
        //     hour = now.getHours();
        //     if (hour < 4 || hour >= 16) {
        //     activateDarkMode();
        //     }
        // }
}

function bindChangeTheme()
{
    $('#js-night-mode').on("click", (event)=>{
        console.log('clicked night mode button');

        if(!isDarkTheme)
        {
            setDarkTheme();
        }
        else
        {
            setLightTheme();
        }
        
        
    });
}



//Function to load all click bindings on the page
function loadBindings()
{
    bindSubmit();
    bindRestoreFormLink();
    loadColorTheme();
    bindChangeTheme();

    //Runs on load to set our icons for changing color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('.fa-sun').hide();
        $('.fa-moon').show();
        isDarkTheme = true;
    }
    else{
        $('.fa-sun').show();
        $('.fa-moon').hide();
        isDarkTheme = false;
    }
}

//Runs when page loads
$(loadBindings);