import { loadHeaderFooter } from './Utils.mjs';
import CurrentLocationWeather from './CurrentLocationWeather.mjs';
import { UserSearchWeather } from './SpecifiedLocation.mjs';
import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';
import { Snowfall } from './Snowfall.mjs';


document.addEventListener('DOMContentLoaded', async function() {
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
});




// function toggleMenu() {
//   document.querySelector('.toggle').classList.toggle('open')
//   // document.getElementById('hamburgerBtn').classList.toggle('open')
// }
// const x = document.getElementById('hamburgerBtn')
// x.onclick = toggleMenu;