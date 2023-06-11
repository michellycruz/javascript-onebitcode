const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

let maisde9Tripulantes = hitchedSpaceships.filter(nave => {
    return nave[1] > 9
}).map(nave => {
    return spaceship[0]
})

let engatePendente = hitchedSpaceships.findIndex(nave =>{
    return nave[2] == false
})

let naveEngatada = hitchedSpaceships.map(nave => {
    return nave[0].toUpperCase()
})


let message = "Espaçonaves com mais de 9 tripulantes: " + maisde9Tripulantes.join(", ")
message += "\nPlataforma com processo de engate: " + (engatePendente + 1)
message += "\nEspaçonaves destacadas: " + naveEngatada.join(", ")

alert(message)