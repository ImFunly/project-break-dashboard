const options = {
    mayus: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minus: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    simbols: "!@#$%^&*()-_=+"
}
let password = document.getElementById("generated");

function getPassword() {
  const inputNumber = document.getElementById("inputNumber");
  const generateButton = document.querySelector(".generate");
  const errorMessage = document.getElementById("error-message");

  for (let i = 0; i <= inputNumber.value; i++) {

  }

  function showError() {
    inputNumber.addEventListener("input", () => {
      if (inputNumber.value < 12 || inputNumber.value > 50) {
        errorMessage.textContent = "Introduce un número entre 12 y 50.";
      } else {
        errorMessage.textContent = "";
      }
    });
  }
  showError();
}
getPassword();


