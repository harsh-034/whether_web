

    async function getWeather() {
      const city = document.getElementById('cityInput').value.trim();
      if (!city) {
        alert('Please enter a city name');
        return;
      }

      const apiKey = "ee981e445e9540e292565636250307";
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('City not found');
        const data = await res.json();

        document.getElementById('weatherCard').classList.remove('d-none');
        document.getElementById('location').innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
        document.getElementById('condition').innerText = data.current.condition.text;
        document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById('wind').innerText = `Wind: ${data.current.wind_kph} km/h`;
        document.getElementById('weatherIcon').src = "https:" + data.current.condition.icon;

      } catch (err) {
        alert('Error: ' + err.message);
      }
    }
