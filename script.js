

function PassChecker() {
    const headerElement = document.getElementById('erosseg');
    const bannerElement = document.getElementById('banner')
    const cardInput = document.getElementById('card');

    const cardInputValue = cardInput.value;

    const cardInputValueLength = cardInputValue.length;

    const hasNumber = /\d/.test(cardInputValue);

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(cardInputValue);

    const hasUpperCase = /[A-Z]/.test(cardInputValue);


    if (cardInputValueLength <= 4 && cardInputValueLength != 0 && !hasNumber && !hasSpecialChar && !hasSpecialChar) {

        headerElement.textContent = "Gyenge";
        bannerElement.style.backgroundColor = "#cc0c33"
    
      } else if (cardInputValueLength >= 5 && cardInputValueLength < 8 && hasNumber && !hasSpecialChar && hasUpperCase) {
    
        headerElement.textContent = "Kicsit jobb";
        bannerElement.style.backgroundColor = "#e3a02d"
    
      } else if (cardInputValueLength >= 8 && hasNumber && !hasSpecialChar && hasUpperCase) {
    
        headerElement.textContent = "Jó";
        bannerElement.style.backgroundColor = "#79e32d"
    
      } else if (cardInputValueLength >= 9 && cardInputValueLength < 12 && hasNumber && hasSpecialChar && hasUpperCase) {
    
        headerElement.textContent = "Nagyon jó";
        bannerElement.style.backgroundColor = "#2de36a"

      } else if (cardInputValueLength >= 12 && hasNumber && hasSpecialChar && hasUpperCase) {
    
        headerElement.textContent = "Legendás";
        bannerElement.style.backgroundColor = "#2de0e3"
    
      } else if (cardInputValueLength = 0) {
    
        headerElement.textContent = "Írd be a jelszavad hogy megnézzük milyen erős valójában!";
        bannerElement.style.backgroundColor = "#1286b4"
      }
    
    }



const cardInput1 = document.getElementById('card');

cardInput1.addEventListener('input', PassChecker);


PassChecker();




