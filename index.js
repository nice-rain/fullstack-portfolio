'use strict'


//Called when we successfully send a message
//Hides our entire form and displays a message that we sent our message
//Should give a link to click to unhide our form again for another message
function onSendSuccess()
{
    //console.log("On Response Received")
    
    //If our request was successful, hide and reset our form here, then show our success message
    $('.js-contact-form').hide();
    $('.js-contact-form')[0].reset();
    $('.success-message').show();
}

//Function that sends our email request to our server
function sendEmailRequest()
{
    //console.log("Function: SendEmailRequest");
       
        //Store our contact form
        const contactForm = $('.js-contact-form');

        //Prepare and send our ajax request
       const request = {
        url: "https://fullstack-dev.pro/contact",
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
        $('.js-contact-form').show();
        
    });
}

//Function to load all click bindings on the page
function loadBindings()
{
    bindSubmit();
    bindRestoreFormLink();
}

//Runs when page loads
$(loadBindings);