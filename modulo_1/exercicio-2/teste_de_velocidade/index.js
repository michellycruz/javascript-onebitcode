/*
# [Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)](https://www.mindmeister.com/map/2783164155)

*/

let carro1 = prompt("Qual o nome do primeiro veículo?")
let velcarro1 = prompt("Qual a velocidade dele?")

let carro2 = prompt("Qual o nome do segundo veículo?")
let velcarro2 = prompt("Qual a velocidade dele?")

if (velcarro1 > velcarro2){

    alert(carro1 + " é mais rápido que " + carro2);

} else if (velcarro2 > velcarro1) {

    alert(carro2 + " é mais rápido que " + carro1);

} else {
    alert("A " + " velocidade do " + carro1 + " e a do " + carro2 + " são iguais");
}