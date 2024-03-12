

function PassChecker() {

    const cardInput = document.getElementById('card');

    const cardInputValue = cardInput.value;

    const cardInputValueLength = cardInputValue.length;

    const hasNumber = /\d/.test(cardInputValue);

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(cardInputValue);

    const hasUpperCase = /[A-Z]/.test(cardInputValue);


    if (cardInputValueLength <= 5 && !hasNumber && !hasSpecialChar) {
        console.log("Weak");
    } 

}

const cardInput = document.getElementById('card');

cardInput.addEventListener('input', PassChecker);


PassChecker();