alert("Bem vindo ao sistema de navegação para astronautas!!")

let velocidade = 0
let piloto = prompt("Informe o nome do piloto")
let novaVelocidade = prompt("A que velocidade você gostaria de acelerar a nave?")
let confirmVelocidade = confirm("Estamos acelerando para " + novaVelocidade + "km/s")

if(confirmVelocidade){
    velocidade = novaVelocidade
}

alert("Você está a " + velocidade + "km")

if(velocidade <= 0){
    alert("A nave está parada. Considere partir ou aumentar a velocidade")
    velocidade = prompt("A que velocidade você gostaria de acelerar a nave?")
}else if(velocidade < 40){
    alert("Você está devagar, podemos aumentar mais")
    velocidade = prompt("A que velocidade você gostaria de acelerar a nave?")
}else if(velocidade < 80){
    alert("Parece uma boa velocidade para manter")
}else if(velocidade < 100){
    alert("Velocidade alta, considere diminuir")
    velocidade = prompt("A que velocidade você gostaria de acelerar a nave?")
}else {
    alert("Velocidade perigosa. Controle automático forçado")
}

alert("| Informações sobre a viagem |" +
      "\n\nNome do piloto: " + piloto +
      "\nVelocidade atual: " + velocidade
)