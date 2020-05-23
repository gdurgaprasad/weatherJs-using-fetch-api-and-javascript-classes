const storage = new Storage();
const weather = new Weather(storage.getLocation().city);
const ui = new UI();

document.addEventListener("DOMContentLoaded", fetchWeather);

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  storage.setLocation(city);

  weather.changeLocation(city);

  fetchWeather();
  
  $("#exampleModal").modal("hide");
});

function fetchWeather() {
  weather
    .fetchWeather()
    .then((result) => {
      ui.paint(result);
    })
    .catch((error) => console.error(error));
}
