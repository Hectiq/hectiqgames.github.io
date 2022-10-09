
function onSubmit(token) {

    let name = document.forms["contact-form"]["name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let message = document.forms["contact-form"]["message"].value;
    if (name == "" || message == "" || email == "") {
        alert("Name must be filled out");
        return false;
    }
    res = document.getElementById("contact-form").submit();
    cleanContactForm()
}

function cleanContactForm() {
    $('#contact-form').removeClass("error").addClass("success");
    $('#contact-form textarea, #contact-form input').attr("placeholder","");
    $('#contact-form textarea').attr("placeholder",json.succesMessage);
    $('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);
}


