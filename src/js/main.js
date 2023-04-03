import { loadHeaderFooter } from './Utils.mjs';
import CurrentLocationWeather from './CurrentLocationWeather.mjs';
import { UserSearchWeather } from './SpecifiedLocation.mjs';
import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';
import { Snowfall } from './Snowfall.mjs';

document.addEventListener('DOMContentLoaded', async function () {
  await loadHeaderFooter();
  const myCurrentlocationWeather = new CurrentLocationWeather();
  const searchResult = new UserSearchWeather();
  new Modal();
  const rain = new Rain('modal-content');
  const snowfall = new Snowfall('body', 15);
  snowfall.createSnowflakes();

  myCurrentlocationWeather.start();
  searchResult.start();
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

// function toggleMenu() {
//   document.querySelector('.toggle').classList.toggle('open')
//   // document.getElementById('hamburgerBtn').classList.toggle('open')
// }
// const x = document.getElementById('hamburgerBtn')
// x.onclick = toggleMenu;
