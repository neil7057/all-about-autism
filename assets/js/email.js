
function sendMail(contactForm) {
    emailjs.send("service_uajjbzw", "template_75wup1h", {
        "first_name": contactForm.firstname.value,
        "last_name": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value,
        "contact_form_message": contactForm.feedbackmessage.value
    })
    .then(
        // confirmation to user via modal
        //  reset form data in native JS
        function emailsent() {
            document.getElementById('contactForm').reset();
            $("#contact-Modal").modal('show');
    },
        // else log an error
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

function closeModal() {
    $("#contact-Modal").modal('hide');
    console.log("clicked");
}