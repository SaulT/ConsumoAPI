// const XMLHttpRequest = require('xhr2');
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function (){
//     if(this.readyState == 4 && this.status == 200){
//         console.log(JSON.parse(this.responseText));
//     }
// }
// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.send(null);


// const fetch = require("cross-fetch");
// fetch('https://swapi.dev/api/people/1')
// .then(response => response.json())
// .then(json => console.log(json));


// const request = require('request');
// request.get('https://swapi.dev/api/people/10/', (error, response, body) => {
//     const character = response.body;
//     const json = JSON.parse(character)
//     console.log(`El personaje solicitado es: ${json.name}`);
// })

const request = require('request');
function imprimiPersonaje(idPersonaje){
    getCharacter(idPersonaje)
}

function getCharacter(id){
    request.get(`https://swapi.dev/api/people/${id}`, (error, response, body) => {
        const personaje = JSON.parse(body)
        getPlanet(personaje.homeworld, personaje.name)
    })
}

function getPlanet(urlPlanet, nombre){
    request.get(urlPlanet, (error, response, body) => {
        const planeta = JSON.parse(body)
        console.log(`El personaje es ${nombre} y vive en ${planeta.name}`)
    })
}

imprimiPersonaje(10)