// // This is how to generate otp
const otp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const btn = document.getElementById("btn")
const numbers = document.querySelector('.number')

btn.addEventListener("click", function () {
    let Otp = " ";
    for (let i = 0; i < 6; i++) {
        Otp += otp[getRandomNumber()]
    };
    numbers.textContent = Otp;
});

function getRandomNumber() {
    return Math.floor(Math.random() * otp.length);
}


// This is how to generate account numbers for each customer.
const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const Btn = document.getElementById("Btn")
const acc_number = document.querySelector('.accnumber')

Btn.addEventListener("click", function () {
    let Acc = "311 ";
    for (let i = 0; i < 7; i++) {
        Acc += Numbers[getRandomAcc_Number()]
    };
    acc_number.textContent = Acc;
});

function getRandomAcc_Number() {
    return Math.floor(Math.random() * Numbers.length);
}