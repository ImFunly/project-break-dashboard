const insertClime = document.getElementById("insertClime");

const apiKey = "bc614f989cc648bab74201418241004";
const city = "Almeria";
let date = new Date();
export const getClime = async () => {
  try {
    const respuesta = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    );
    if (!respuesta.ok) {
      throw new Error("Error al obtener datos del clima: " + respuesta.status);
    }
    const data = await respuesta.json();

    const container = document.createElement("div");
    container.classList.add("container");
    insertClime.appendChild(container);

    const location = document.createElement("div");
    location.classList.add("location");
    location.innerHTML = `${data.location.name} / ${data.location.country}`;
    container.appendChild(location);

    const currentWeather = document.createElement("div");
    currentWeather.classList.add("current");
    currentWeather.innerHTML = `
      <div class="currentyellow">${data.current.condition.text}</div>
      <img src="https:${data.current.condition.icon}" alt="Weather Icon"> 
      <div>${data.current.temp_c}°C</div>
      <div>Precipitaciones: ${data.current.precip_mm}% Humedad: ${data.current.humidity}% Viento: ${data.current.wind_kph} km/h</div>
    `;
    location.appendChild(currentWeather);

    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecastContainer");
    container.appendChild(forecastContainer);
    const dataForecast = data.forecast.forecastday;
    dataForecast.forEach((item) => {
      item.hour.forEach((hour) => {
        const currentHours = document.createElement("div");
        const time = hour.time.match(/([0-1][0-9]|2[0-3]):([0-5][0-9])/)[0];
        currentHours.innerHTML = `<p>${time}</p>`;
        currentHours.classList.add("currentHours");
        forecastContainer.appendChild(currentHours);
        const img = document.createElement("img");
        img.src = `https:${hour.condition.icon}`;
        forecastContainer.appendChild(img);
        const grados = document.createElement("div");
        grados.innerHTML = `<p>${hour.temp_c}°C</p>`;
        forecastContainer.appendChild(grados);
        grados.classList.add("grados");
      });
    });
  } catch (error) {
    console.error("Ha habido un error:", error);
  }
};

getClime();

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
