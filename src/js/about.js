import { Modal } from "./Modal.mjs";
import { Rain } from "./Rain.mjs";
import { loadHeaderFooter } from "./Utils.mjs";

document.addEventListener('DOMContentLoaded', async function() {
    await loadHeaderFooter();
    new Modal();
    const rain = new Rain('modal-content');
  
    rain.createRain();
    function toggleMenu() {
      document.querySelector('.toggle').classList.toggle('open');
      document.getElementById('hamburgerBtn').classList.toggle('open');
    }
  
    const x = document.getElementById('hamburgerBtn');
    x.onclick = toggleMenu;
  });