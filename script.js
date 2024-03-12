
function checkLength() {

    const cardInput = document.getElementById('card');

    const cardInputValueLength = cardInput.value.length;

    console.log(`Length: ${cardInputValueLength}`);
    cardInput.addEventListener('input', checkLength);

}




checkLength();