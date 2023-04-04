export default class WindChillCalculator {
    calculateWindChill(temperature, windSpeed) {
      const T = parseFloat(temperature);
      const V = parseFloat(windSpeed);
  
      // if (isNaN(T) || isNaN(V)) {
      //   throw new Error('Please enter values for temperature and wind speed.');
      // }
  
      // if (T > 10 || V < 4.8 || V > 177) {
      //   throw new Error('Please enter valid values for temperature and wind speed.');
      // }
      if (T > 10) {
        alert('A Wind Chill value cannot be calculated for temperatures greater than 10.0 degrees Celsius')
        throw new Error('Please enter valid values for temperature and wind speed.');
      }
      if (V < 4.8) {
        alert('A Wind Chill value cannot be calculated for wind speeds less than 4.8 kilometers/hour')
        throw new Error('Please enter valid values for temperature and wind speed.');
      }
      if (V > 177) {
        alert('A Wind Chill value cannot be calculated for wind speeds greater than 177 kilometers/hour')
        throw new Error('Please enter valid values for temperature and wind speed.');
      }

  
      const windChill = 13.12 + (0.6215 * T) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16));
      return windChill.toFixed(2);
    }
  
    displayWindChillResult() {
      const temperatureInput = document.getElementById('temp');
      const windSpeedInput = document.getElementById('wind');
      const temperature = temperatureInput.value;
      const windSpeed = windSpeedInput.value;
      const windChillResult = document.getElementById('wind-chill-result');
  
      try {
        const windChill = this.calculateWindChill(temperature, windSpeed);
        windChillResult.textContent = `The wind chill is ${windChill}°C.`;
      } catch (error) {
        windChillResult.textContent = error.message;
      }
    }
  }
  