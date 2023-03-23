import WeatherMap from './WeatherMap.mjs';
import { loadHeaderFooter } from './Utils.mjs';
import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';
// Create a new instance of the WeatherMap class and call the fetchWeatherData method

document.addEventListener('DOMContentLoaded', async function() {
    await loadHeaderFooter();
    new Modal();
    new WeatherMap();
    
    const rain = new Rain('modal-content');
   
    rain.createRain();
  });