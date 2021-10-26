// const request = require('request')
// const apiKey = 'DEMO_KEY'
// const apiKey2 = 'ha2mrnmv1hLKAY0LdTmorSqbQ5ZSSXKzqBbYDlMa'
// request.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, (error, response, body) => {
//     const apod = JSON.parse(body)
//     console.log(`Url imagen: ${apod.url}`);
// })



const request = require("request");
const urlBase = "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key="
const api_key = "iAf8WzibB6k4pFw4PIHR22e75rWRLJN52iPmYHUk"
let start_date = "",
    end_date = "",
    url = urlBase + api_key,
    asteroidsList = [],
    hazardousAsteroids = [];
function getHazardousAsteroids(start_date, end_date) {
    const URL_FINAL = url + "&start_date=" + start_date + "&end_date=" + end_date;
    console.log(URL_FINAL)
    return URL_FINAL
}



function printHazardousAsteroid(url){
    request.get(url, (err, response, body) => {
        const asteroids = JSON.parse(body)
        console.log(asteroids)
    })
}

printHazardousAsteroid(getHazardousAsteroids("2015-09-07", "2015-09-08"))