const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

function maisde9Tripulantes(nave){
    const tripulantes = nave[1]
    if(tripulantes >= 9){
        return true
    } else {
        return false
    }
};


const naveFiltrada = hitchedSpaceships.filter((nave) => maisde9Tripulantes(nave));

console.table(naveFiltrada)