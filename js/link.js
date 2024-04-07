function putURL() {
  const inputName = document.getElementById("inputName").value;
  const inputURL = document.getElementById("inputURL").value;
  const insertURL = document.getElementById("insertURL");

  const newParagraph = document.createElement("p");

  newParagraph.textContent = inputName + " " + inputURL;
  insertURL.appendChild(newParagraph);
}

const insertButton = document.querySelector(".insertButton");
insertButton.addEventListener("click", putURL);
