import { map, tileLayer, marker } from 'leaflet';

export default class WeatherMap {
  constructor() {
    // Create a map object
    this.map = map('map').setView([0, 0], 10);

    // Add a tile layer
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Prompt user for location access and update map accordingly
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.map.setView([latitude, longitude], 10);
      this.getWeatherData(latitude, longitude);
    }, error => {
      console.error(`Failed to get user's location:`, error);
    });

    // Fetch weather data for default location
    this.getWeatherData(40.7128, -74.0060, 'New York City');
  }

  getWeatherData(latitude, longitude, city = '') {
    // Fetch weather data from OpenWeatherMap API for the given latitude and longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=b045804ab93431828b3e101e2be26dc1`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { coord: { lat, lon }, main: { temp }, wind: { speed, deg } } = data;

        // Clear any existing markers on the map
        this.map.eachLayer(layer => {
          if (layer instanceof marker) {
            this.map.removeLayer(layer);
          }
        });

        // Add a marker with a popup showing the current weather conditions
        const weatherMarker = marker([lat, lon]).addTo(this.map);
        if (city) {
          weatherMarker.bindPopup(`<b>${city}</b><br><b>Temperature:</b> ${temp} &#8451;<br><b>Wind:</b> ${speed} m/s, ${deg} &deg;`);
        } else {
          // If the city parameter is not provided, use the name of the location returned by the API
          const locationName = data.name;
          weatherMarker.bindPopup(`<b>${locationName}</b><br><b>Temperature:</b> ${temp} &#8451;<br><b>Wind:</b> ${speed} m/s, ${deg} &deg;`).openPopup();
        }
      })
      .catch(error => {
        console.error(`Failed to fetch weather data for ${city}:`, error);
      });
  }
}
