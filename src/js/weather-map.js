import WeatherMap from './WeatherMap.mjs';
import { loadHeaderFooter } from './Utils.mjs';
import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';

// Load header and footer, then create new instances of the Modal and WeatherMap classes
document.addEventListener('DOMContentLoaded', function() {
  loadHeaderFooter().then(() => {
    new Modal();
    new WeatherMap();
    const rain = new Rain('modal-content');
    rain.createRain();
    function toggleMenu() {
      document.querySelector('.toggle').classList.toggle('open');
      document.getElementById('hamburgerBtn').classList.toggle('open');
    }
  
    const x = document.getElementById('hamburgerBtn');
    x.onclick = toggleMenu;
  });
});
