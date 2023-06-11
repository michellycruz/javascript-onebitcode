function slowDown (velocidade, printer){
    let deceleration = 20

    while(velocidade > 0){
        printer(velocidade)
        velocidade -= deceleration
    }
    alert("A nave está parada, as portas estão abrindo")
}

let velocidadeAtual = 150

slowDown(velocidadeAtual, function(velocidade){
    console.log("A velocidade está em: " + velocidade)
})