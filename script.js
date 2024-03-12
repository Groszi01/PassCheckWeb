

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
    if (cardInputValueLength > 5 && cardInputValueLength < 8 && !hasNumber && !hasSpecialChar && hasUpperCase) {
        console.log("Little better");
    }
    if (cardInputValueLength > 8 && hasNumber && !hasSpecialChar && hasUpperCase) {
        console.log("Good");
    }
    if (cardInputValueLength > 8 && cardInputValueLength < 12 && hasNumber && hasSpecialChar && hasUpperCase) {
        console.log("Very Good");
    }
    if (cardInputValueLength > 12 && hasNumber && hasSpecialChar && hasUpperCase) {
        console.log("Godly");
    }

}

const cardInput = document.getElementById('card');

cardInput.addEventListener('input', PassChecker);


PassChecker();