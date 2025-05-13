async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '9ae9faa0abd269588fcce3475da74bb3'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById('weatherInfo').innerHTML = `<p>City not found.</p>`;
            return;
        }

        const weatherHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherHTML;
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data.</p>`;
    }
}
