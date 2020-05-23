class Weather {
  constructor(city) {
    this.apiKey = "ff34e98967a54b9fa5c55931202305";
    this.city = city;
  }

  async fetchWeather() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
