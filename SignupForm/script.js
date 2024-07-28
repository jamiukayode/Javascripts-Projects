
let signUpButton = document.getElementById("signUpBtn");
let signInButton = document.getElementById("signInBtn");
let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let welcome = document.getElementById("WelcomeSms");

signUpButton.addEventListener("click", function () {
    nameField.style.maxHeight = "60px"
    title.innerHTML = 'Sign Up'
    welcome.innerHTML = "Register here!"
    signUpButton.classList.remove("disable")
    signInButton.classList.add("disable")
});

signInButton.addEventListener("click", function () {
    nameField.style.maxHeight = "0"
    title.innerHTML = 'Sign in'
    welcome.innerHTML = "Welcome Back!"
    signUpButton.classList.add("disable")
    signInButton.classList.remove("disable")
});



