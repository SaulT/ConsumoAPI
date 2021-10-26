// const request = require('request')

// function getPokemon(id) {
//     request.get(`https://pokeapi.co/api/v2/pokemon/${id}`, (error, response,body) => {
//         const pokemon = JSON.parse(body);
//         console.log(`El pokemón es ${pokemon.name} y su tipo es:`)
//         for (let i = 0; i < pokemon.types.length; i++) {
//             console.log(pokemon.types[i].type.name)
//         }
//       }
//     );
// }
// getPokemon(6)

const request = require('request')
let listaPokemon = []
const promise = new Promise((resolve, reject) => {
    for (let index = 1; index < 50; index++) {
        request.get(`https://pokeapi.co/api/v2/pokemon/${index}`, (error, response,body) => {
            const pokemon = JSON.parse(body);
            let tipos = []
            for (let i = 0; i < pokemon.types.length; i++) {
                tipos.push(pokemon.types[i].type.name)
            }
            let moves = []
            for (let i = 0; i < pokemon.moves.length; i++) {
                moves.push(pokemon.moves[i].move.name)
            }
            listaPokemon.push({'nombre': pokemon.name, 'moves': moves, 'tipos': tipos, 'altura': pokemon.height, 'peso': pokemon.weight, })
            //console.log(pokemon.name)
          }
        )
    }
    setTimeout(()=>{
        resolve(listaPokemon)
    }, 3000)
})

promise
    .then(listaPokemon => console.log('Primeros', listaPokemon))
    .catch(error => console.log(error))