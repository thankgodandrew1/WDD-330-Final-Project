export class Snowfall {
  constructor(containerSelector, numSnowflakes) {
    this.container = document.querySelector(containerSelector);
    this.numSnowflakes = numSnowflakes;
  }

  createSnowflakes() {
    for (let i = 0; i < this.numSnowflakes; i++) {
      let snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄'; // Used a unicode snowflake character
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDelay = Math.random() * 10 + 's';
      this.container.appendChild(snowflake);
    }
  }
}
