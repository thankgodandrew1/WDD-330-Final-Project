import WeatherMap from './WeatherMap.mjs';
import { loadHeaderFooter } from './Utils.mjs';
import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';

// Load header and footer, then create new instances of the Modal and WeatherMap classes
document.addEventListener('DOMContentLoaded', function () {
  loadHeaderFooter().then(() => {
    new Modal();
    new WeatherMap();
    const rain = new Rain('modal-content');
    rain.createRain();
    function toggleMenu() {
      const toggle = document.querySelector('.toggle');
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      toggle.classList.toggle('open');
      hamburgerBtn.classList.toggle('open');
      if (toggle.classList.contains('open')) {
        toggle.style.left = '0';
        toggle.style.height = '100vh';
      } else {
        toggle.style.left = '-80%';
        toggle.style.height = '0';
      }
    }

    const x = document.getElementById('hamburgerBtn');
    x.onclick = toggleMenu;

    // Hide the toggle if clicked outside of it
    document.addEventListener('click', function (event) {
      const toggle = document.querySelector('.toggle');
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      if (
        !toggle.contains(event.target) &&
        !hamburgerBtn.contains(event.target)
      ) {
        toggle.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        toggle.style.left = '-80%';
        toggle.style.height = '0';
      }
    });
  });
});
