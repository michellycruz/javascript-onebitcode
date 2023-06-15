/*
# [Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)](https://www.mindmeister.com/map/2783164155)

*/

let veiculo1 = (prompt("Qual o nome do primeiro veículo?"))
let velVeiculo1 = parseFloat(prompt("Qual a velocidade dele?"))

let veiculo2 = (prompt("Qual o nome do segundo veículo?"))
let velVeiculo2 = parseFloat(prompt("Qual a velocidade dele?"))

    if(velVeiculo1 > velVeiculo2){
        alert("O veículo " + veiculo1 + " é mais rápido que o veículo " + veiculo2 +
        "\n\n" + veiculo2 + ": " + velVeiculo2 + "km" +
        "\n" + veiculo1 + ": " + velVeiculo1 + "km")
    } else if(velVeiculo1 < velVeiculo2){
        alert("O veículo " + veiculo2 + " é mais rápido que o veículo " + veiculo1 +
        "\n\n" + veiculo2 + ": " + velVeiculo2 + "km" +
        "\n" + veiculo1 + ": " + velVeiculo1 + "km")
    } else {
        alert("Ambos tem a mesma velocidade " +
        "\n\n" + veiculo2 + ": " + velVeiculo2 + "km" +
        "\n" + veiculo1 + ": " + velVeiculo1 + "km")
    }