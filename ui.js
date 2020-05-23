class UI {
  constructor() {
    this.wLocation = document.getElementById("w-location");
    this.wDesc = document.getElementById("w-desc");
    this.wString = document.getElementById("w-string");
    this.wIcon = document.getElementById("w-icon");
    this.wHumidity = document.getElementById("w-humidity");
    this.wUV = document.getElementById("w-uv");
    this.wFeelsLike = document.getElementById("w-feels-like");
    this.wWind = document.getElementById("w-wind");
  }

  paint(detail) {
    const { location, current } = detail;
    this.wLocation.textContent = `${location.name}, ${location.region}`;
    this.wDesc.textContent = current.condition.text;
    this.wString.innerHTML = `${current.temp_c}&#8451; /${current.temp_f}&#8457;`;
    this.wIcon.setAttribute("src", current.condition.icon);
    this.wHumidity.textContent = `Humidity: ${current.humidity}%`;
    this.wUV.textContent = `UV: ${current.uv}`;
    this.wFeelsLike.innerHTML = `Feels like: ${current.feelslike_c}&#8451;/${current.feelslike_f}&#8457;`;
    this.wWind.innerHTML = `Wind Direction : ${current.wind_degree}&#176; ${current.wind_dir}`;
  }
}
