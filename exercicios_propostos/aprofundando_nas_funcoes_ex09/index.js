let velocidadeNave = 150

do{
    const desacelaracao = function(velocidadeNave){
     let velocidadeFinal = velocidadeNave - 20
     velocidadeFinal = velocidade.reduce(desacelaracao, velocidadeNave)
    }
    alert("A velocidade está em " + velocidadeNave)

} while(velocidadeNave == 0)