///////////MÉDIA ARITMÉTICA SIMPLES

let media = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}


console.log(`Média aritmética simples: ${5, 4, 6, 8}`)

//////////MÉDIA PONDERADA