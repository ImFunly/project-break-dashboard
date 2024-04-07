function showDate() {
  const date = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  document.getElementById("dateDisplay").innerText = formattedDate;
}
showDate();

function showTime() {
  let timeFormat = new Date();
  let hour = timeFormat.getHours();
  let minutes = timeFormat.getMinutes();
  let seconds = timeFormat.getSeconds();

  let time = hour;
  let displayElement = document.getElementById("clockDisplay");
  document.getElementById("clockDisplay").innerText = time;

  let message;
  if (hour >= 0 && hour < 7) {
    message = "Es hora de descansar. Apaga y sigue mañana";
  } else if (hour >= 7 && hour < 12) {
    message = "Buenos días, desayuna fuerte y a darle al código";
  } else if (hour >= 12 && hour < 14) {
    message = "Echa un rato más pero no olvides comer";
  } else if (hour >= 14 && hour < 16) {
    message = "Espero que hayas comido";
  } else if (hour >= 16 && hour < 18) {
    message = "Buenas tardes, el último empujón";
  } else if (hour >= 18 && hour < 23) {
    message = "Esto ya son horas extras, ... piensa en parar pronto";
  } else {
    message = "Buenas noches, es hora de pensar en parar y descansar";
  }

  let displayText = `${hour}:${minutes}:${seconds} \n${message}`;
  displayElement.innerText = displayText;
  displayElement.textContent = displayText;

  setTimeout(showTime, 1000);
}
showTime();
