
function onSubmit(token) {

    //add validation here
    res = document.getElementById("contact-form").submit();
    cleanContactForm()
}

function cleanContactForm() {
    $('#contact-form').removeClass("error").addClass("success");
    $('#contact-form textarea, #contact-form input').attr("placeholder","");
    $('#contact-form textarea').attr("placeholder",json.succesMessage);
    $('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);
}


