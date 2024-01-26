const apiKey = ''
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('add-city-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value
    getWeatherData(city)
});

function getWeatherData(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=pl`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.cod === 200) {
                addCityToLocalStorage(city)
                updateUI(city, data)
            } else {
                alert('City not found')
            }
        })
        .catch(error => {
            alert('Something went wrong')
            console.error('Error:', error)
        });
}

function updateUI(city, weatherData) {
    const citiesList = document.getElementById('cities-list')
    const weatherIconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`

    const cityDiv = document.createElement('div')
    cityDiv.classList.add('city')
    cityDiv.setAttribute('id', city)
    cityDiv.innerHTML = `
        <h2>${city}</h2>
        <img src="${weatherIconUrl}" class="weather-icon" alt="Weather icon">
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <button onclick="removeCity('${city}')">Remove</button>
    `
    if (document.getElementById(city) == null){
        citiesList.appendChild(cityDiv)

    }
}

function addCityToLocalStorage(city) {
    let cities = JSON.parse(localStorage.getItem('cities')) || []
    if (!cities.includes(city)) {
        cities.push(city)
        localStorage.setItem('cities', JSON.stringify(cities))
    }
}

function removeCity(city) {
    let cities = JSON.parse(localStorage.getItem('cities')) || []
    cities = cities.filter(c => c !== city)
    localStorage.setItem('cities', JSON.stringify(cities))
    loadSavedCities()
}

function loadSavedCities() {
    const cities = JSON.parse(localStorage.getItem('cities')) || []
    document.getElementById('cities-list').innerHTML = ''
    cities.forEach(city => getWeatherData(city))
}

loadSavedCities();