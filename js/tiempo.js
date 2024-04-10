const insertClima = document.getElementById("insertClime");

const apiKey = "f75c6c93612549e8911142624240804";
const city = "Almeria";

const getClime = async () => {
  try {
    const respuesta = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    );
    if (!respuesta.ok) {
      throw new Error("Error al obtener datos del clima: " + respuesta.status);
    }
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.error("Ha habido un error:", error);
  }
};

getClime();
