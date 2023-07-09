function media(...notas){
    const totalNotas = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    console.log(totalNotas / notas.length)
}

media(5, 10, 8, 6, 4)