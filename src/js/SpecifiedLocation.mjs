export class UserSearchWeather {
  constructor() {
    this.timeEl = document.getElementById('time');
    this.dateEl = document.getElementById('date');
    this.currentWeatherItemsEl = document.getElementById('current-weather-items');
    this.timezone = document.getElementById('time-zone');
    this.countryEl = document.getElementById('country');
    this.weatherForecastEl = document.getElementById('weather-forecast');
    this.currentTempEl = document.getElementById('current-temp');
    this.days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    this.API_KEY = 'b045804ab93431828b3e101e2be26dc1';
    this.searchForm = document.querySelector('.search form');
    this.searchInput = document.querySelector('#search-input');
    this.searchSubmitBtn = document.querySelector('#search-submit-btn');
  }

  start() {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? 'PM' : 'AM';

      this.timeEl.innerHTML =
        (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
        ':' +
        (minutes < 10 ? '0' + minutes : minutes) +
        ' ' +
        `<span id='am-pm'>${ampm}</span>`;

      this.dateEl.innerHTML = this.days[day] + ', ' + date + ' ' + this.months[month];
    }, 1000);

    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = this.searchInput.value.trim();
      if (!searchTerm) {
        alert('Please enter a valid search term');
        return;
      }
      this.getWeatherData(searchTerm);
      this.searchInput.value = '';
    });
  }

  getWeatherData(searchTerm) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${this.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod !== 200) {
          alert(data.message);
          return;
        }
        const { coord } = data;
        const { lat, lon } = coord;
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${this.API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            this.showWeatherData(data, searchTerm);
          });
      })
      .catch((err) => console.log(err));
  }

  showWeatherData(data) {
    let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

    this.timezone.innerHTML = data.timezone;
    this.countryEl.innerHTML = data.lat + 'N ' + data.lon + 'E';

    this.currentWeatherItemsEl.innerHTML = `<div class="weather-item">
            <div>Humidity</div>
            <div>${humidity}%</div>
        </div>
        <div class="weather-item">
            <div>Pressure</div>
            <div>${pressure}</div>
        </div>
        <div class="weather-item">
            <div>Wind Speed</div>
            <div>${wind_speed}</div>
        </div>

        <div class="weather-item">
            <div>Sunrise</div>
            <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
        </div>
        <div class="weather-item">
            <div>Sunset</div>
            <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
        </div>
        
        
        `;

    let otherDayForcast = '';
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            this.currentTempEl.innerHTML = `
                <img src="http://openweathermap.org/img/wn/${
                    day.weather[0].icon
                }@4x.png" alt="weather icon" class="w-icon">
                <div class="other">
                    <div class="day">${window
                        .moment(day.dt * 1000)
                        .format('dddd')}</div>
                    <div class="temp">Night - ${day.temp.night}&#176;F</div>
                    <div class="temp">Day - ${day.temp.day}&#176;F</div>
                </div>
                
                `;
        } else {
            otherDayForcast += `
                <div class="weather-forecast-item">
                    <div class="day">${window
                        .moment(day.dt * 1000)
                        .format('ddd')}</div>
                    <img src="http://openweathermap.org/img/wn/${
                        day.weather[0].icon
                    }@2x.png" alt="weather icon" class="w-icon">
                    <div class="temp">Night - ${day.temp.night}&#176;F</div>
                    <div class="temp">Day - ${day.temp.day}&#176;F</div>
                </div>
                
                `;
        }
    });

    this.weatherForecastEl.innerHTML = otherDayForcast;
    }
  }