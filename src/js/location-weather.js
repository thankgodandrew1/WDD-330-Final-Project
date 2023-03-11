import CurrentLocationWeather from './CurrentLocationWeather.mjs';
import { UserSearchWeather } from './SpecifiedLocation.mjs';
import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';
import { Snowfall } from './Snowfall.mjs';

const myCurrentlocationWeather = new CurrentLocationWeather();
const searchResult = new UserSearchWeather
// create an instance of the Modal class
const modal = new Modal();
const rain = new Rain('modal-content');
// const snowfall = new Snowfall('#forecast', 50);

document.addEventListener('DOMContentLoaded', function() {
  const snowfall = new Snowfall('body', 15);
  snowfall.createSnowflakes();
});

rain.init();
myCurrentlocationWeather.start()
searchResult.start()
modal.start()
// snowfall.createSnowflakes();



function toggleMenu() {
  document.querySelector('.toggle').classList.toggle('open')
  // document.getElementById('hamburgerBtn').classList.toggle('open')
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;