import WindChillCalculator from "./WindChillCalculator.mjs";
import { loadHeaderFooter } from './Utils.mjs';
import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';


document.addEventListener('DOMContentLoaded', function() {
    loadHeaderFooter().then(() => {
        const calculator = new WindChillCalculator();
        const calculateWindChillButton = document.getElementById('calculate-wind-chill');
        calculateWindChillButton.addEventListener('click', () => {
          calculator.displayWindChillResult();
        });
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
  });