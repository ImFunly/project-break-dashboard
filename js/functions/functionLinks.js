const insertButton = document.querySelector(".insertButton");
const insertURL = document.getElementById("insertURL");

export function saveUrl() {
  const inputName = document.getElementById("inputName").value;
  const inputURL = document.getElementById("inputURL").value;

  const Container = document.createElement("div");
  Container.style.display = "flex";

  const URLClick = document.createElement("a");
  URLClick.href = inputURL;
  URLClick.target = "_blank";

  const newP = document.createElement("p");
  URLClick.textContent = inputName + " ";
  newP.appendChild(URLClick);

  Container.appendChild(newP);

  const Button = document.createElement("button");
  Button.textContent = "Borrar";
  Container.appendChild(Button);

  insertURL.appendChild(Container);

  const storedDataString = localStorage.getItem("dataUrls");
  const storedData = storedDataString ? JSON.parse(storedDataString) : [];

  storedData.push({ name: inputName, url: inputURL });
  localStorage.setItem("dataUrls", JSON.stringify(storedData));
}

window.onload = function () {
  const storedDataString = localStorage.getItem("dataUrls");

  if (storedDataString) {
    const storedData = JSON.parse(storedDataString);

    storedData.forEach(function (item) {
      const Container = document.createElement("div");
      Container.style.display = "flex";

      const URLClick = document.createElement("a");
      URLClick.href = item.url;
      URLClick.target = "_blank";
      URLClick.textContent = item.name + " ";

      const newP = document.createElement("p");
      newP.appendChild(URLClick);

      Container.appendChild(newP);

      const Button = document.createElement("button");
      Button.textContent = "Borrar";
      Container.appendChild(Button);

      insertURL.appendChild(Container);
    });
  }
};

insertButton.addEventListener("click", saveUrl);

let bg = ["bg/1.jpg", "bg/2.jpg", "bg/3.jpg", "bg/4.jpg"];

function getRandomImage() {
  let randomNumber = Math.floor(Math.random() * bg.length);
  return bg[randomNumber];
}

function setBackgroundImage() {
  let randomBG = getRandomImage();
  document.body.style.backgroundImage = "url('" + randomBG + "')";
}

setBackgroundImage();

setInterval(setBackgroundImage, 5000);
