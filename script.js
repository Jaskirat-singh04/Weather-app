document.getElementById('get-weather-btn').addEventListener('click', () => {
    displayWeather();
});

async function fetchWeather(city) {
    const apiKey = '';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}

async function displayWeather() {
    const city =  document.getElementById('city-input').value; 
    const weatherContainer = document.getElementById('weather-container');

    const weatherData = await fetchWeather(city);

    if (weatherData && weatherData.main && weatherData.weather && weatherData.weather[0]) {
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        const weatherHtml = `<p>Temperature: ${temperature}°C</p>
                             <p>Condition: ${description}</p>`;

        weatherContainer.innerHTML = weatherHtml;
    } else {
        weatherContainer.innerHTML = '<p>Please Provide Input....</p>';
    }
}

displayWeather();
