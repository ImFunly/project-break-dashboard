function getPassword() {
  const inputNumber = document.getElementById("inputNumber");
  const errorMessage = document.getElementById("error-message");
  const generatedPassword = document.getElementById("generated");

  if (inputNumber.value < 12 || inputNumber.value > 50) {
    errorMessage.textContent = "Introduce un número entre 12 y 50.";
    return;
  } else {
    errorMessage.textContent = "";
  }

  const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minus = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  let password = "";

  password += mayus.charAt(Math.floor(Math.random() * mayus.length));

  password += minus.charAt(Math.floor(Math.random() * minus.length));

  password += numbers.charAt(Math.floor(Math.random() * numbers.length));

  password += symbols.charAt(Math.floor(Math.random() * symbols.length));


  const allChars = mayus + minus + numbers + symbols;

  for (let i = 0; i < inputNumber.value - 4; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  console.log(password);
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  generatedPassword.textContent = password;
}

const generateButton = document.querySelector(".generate");
generateButton.addEventListener("click", getPassword);
