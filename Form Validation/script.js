var nameError = document.getElementById("fullName-error")
var emailError = document.getElementById("email-error")
var phoneError = document.getElementById("phone-error")
var passwordError = document.getElementById("password-error")
var messageError = document.getElementById("message-error")


// function for full name validation
function validateName() {
    var name = document.getElementById("fullname").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = '<b> valid </>';
    return true;
}

// function for full email validation
function validateEmail() {
    var email = document.getElementById("email").value;

    if (email.length == 0) {
        emailError.innerHTML = "email is required";
        return false;
    }

    if (!email.match(/^[A-Za-z\._\*-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = '<b> valid </>';
    return true;
}

// function for  phone no validation
function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (phone.length < 1) {
        phoneError.innerHTML = "phone no is required";
        return false;
    }


    if (phone.length !== 10) {
        phoneError.innerHTML = "phone should be 10 digits";
        return false;
    }


    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits please";
        return false;
    }

    phoneError.innerHTML = '<b> valid </>';
    return true;
}


// function for  phone no validation
function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (phone.length < 1) {
        phoneError.innerHTML = "phone no is required";
        return false;
    }


    if (phone.length !== 10) {
        phoneError.innerHTML = "phone should be 10 digits";
        return false;
    }


    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits please";
        return false;
    }

    phoneError.innerHTML = '<b> valid </>';
    return true;
}





// function for  phone no validation
function validatePassword() {
    var password = document.getElementById("password").value;

    if (password.length < 1) {
        passwordError.innerHTML = "password is required";
        return false;
    }


    if (password.length >= 6) {
        phoneError.innerHTML = "phone should be 10 digits";
        return false;
    }


    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits please";
        return false;
    }

    phoneError.innerHTML = '<b> valid </>';
    return true;
}


//validate message function
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;



    if (left > 0 ){
        messageError.innerHTML = left + 'more character required'
        return false;
    }

    messageError.innerHTML = '<b> valid <b/>';
    return true;
}



// validateform function submit button

function validateform() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateMessage()) {
        submitErrror.style.display = 'block';
        submitErrror.innerHTML = 'please fill the empty field'
        setTimeout(function () {
            submitErrror.style.display = 'none';
        }, 3000)
    }
}

