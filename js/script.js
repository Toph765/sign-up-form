const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorConfirm = document.querySelector(".error-confirm");
const errorPassword = document.querySelector(".error-password");
let inputPassword = '';
let inputConfirm = '';

password.addEventListener('input', () => {
    inputPassword = password.value;
    if (inputPassword.length < 8) {
        errorPassword.setAttribute("style", "display: block;");
    } else {
        errorPassword.setAttribute("style", "display: none;");
    }
})

confirmPassword.addEventListener('input', () => {
    inputConfirm = confirmPassword.value;
    if (inputConfirm !== inputPassword) {
        errorConfirm.setAttribute("style", "display: block;");
    } else {
        errorConfirm.setAttribute("style", "display: none;");
    }
})


