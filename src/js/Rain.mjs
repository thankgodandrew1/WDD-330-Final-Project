export class Rain {
    constructor(containerId) {
      this.container = document.querySelector(`#${containerId}`);
    }
  
    createRain() {
      for (let i = 0; i < 400; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
  
        const size = Math.random() * 1 + 5;
        const speed = Math.random() * 5 + 1;
        const delay = Math.random() * 5;
        const position = Math.random() * 100;
  
        raindrop.style.width = `${size}px`;
        raindrop.style.height = `${size}px`;
        raindrop.style.bottom = '50em';
        raindrop.style.left = `${position}%`;
        raindrop.style.animationDelay = `${delay}s`;
        raindrop.style.animationDuration = `${speed}s`;
  
        this.container.appendChild(raindrop);
      }
    }
  
    init() {
      window.addEventListener('load', () => {
        this.createRain();
      });
    }
  }