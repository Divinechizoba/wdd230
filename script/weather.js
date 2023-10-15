const apiKey = '191f95bdee5655471dcc90ba04c0dcb7'; // Replace with your API key
const city = 'WARRI'; // Replace with your city

// Fetch weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const weatherIconElement = document.getElementById('weather-info');

        temperatureElement.textContent = data.main.temp;
        descriptionElement.textContent = data.weather[0].description;
        weatherIconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
