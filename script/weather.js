const apiKey = '191f95bdee5655471dcc90ba04c0dcb7';

// Define the URL to fetch the weather data for a specific location (Trier, Germany)
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Trier,DE&units=metric&appid=${apiKey}`;

// Select the HTML elements that need to be updated
const temperatureElement = document.getElementById('temp');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');

// Define a function to fetch and display weather data
async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();

            // Extract relevant weather information
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            // Update the HTML elements with the retrieved data
            temperatureElement.textContent = `${temperature}°C`;
            descriptionElement.textContent = description;
            weatherIconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
            weatherIconElement.alt = `Weather Icon: ${description}`;
        } else {
            console.error('Failed to fetch weather data:', response.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the function to fetch and display weather data
getWeatherData();