dotenv.config()
// /v1/geo/places?limit=5&offset=0&namePrefix=Krakow
// e0cad25d8d80366d3447017c35b54b97

console.log(`${process.env.OPEN_WEATHER_API_KEY}`)

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=${process.env.OPEN_WEATHER_API_KEY}`)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
    