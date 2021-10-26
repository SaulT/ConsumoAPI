const request = require('request');
function getCharacter(id){
    request.get(`https://swapi.dev/api/people/${id}`, (error, response, body) => {
        const personaje = JSON.parse(body)
        console.log(`El personaje es ${personaje.name} y participo en las películas:`)
        for (let i = 0; i < personaje.films.length; i++) {
            //console.log(personaje.films[i])
            getPelicula(personaje.films[i])
        }
    })
}
function getPelicula(urlPelicula){
    request.get(urlPelicula, (error, response, body) => {
        const pelicula = JSON.parse(body)
        console.log(pelicula.title)
    })
}
getCharacter(1)