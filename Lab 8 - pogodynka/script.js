// /v1/geo/places?limit=5&offset=0&namePrefix=Krakow
// e0cad25d8d80366d3447017c35b54b97

fetch("http://api.positionstack.com/v1/forward?access_key=e0cad25d8d80366d3447017c35b54b97&query=krakow")
    .then((response) => response.json())
    .then((json) => console.log(json))