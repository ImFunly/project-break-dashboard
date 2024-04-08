function putURL() {
  const inputName = document.getElementById("inputName").value;
  const inputURL = document.getElementById("inputURL").value;
  const insertURL = document.getElementById("insertURL");

  const URLClick = document.createElement("a");
  URLClick.href = inputURL;
  URLClick.target = "_blank";

  const newP = document.createElement("p");

  URLClick.textContent = inputName + " ";
  newP.appendChild(URLClick);

  insertURL.appendChild(newP);
}

const insertButton = document.querySelector(".insertButton");
insertButton.addEventListener("click", putURL);
