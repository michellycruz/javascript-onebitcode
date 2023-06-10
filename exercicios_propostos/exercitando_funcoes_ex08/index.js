alert("Seja bem vindo ao programa de bordo")
let nave = prompt("Por favor, informe o nome da nave")
let velocidadeNave = 0
let opcao = ""

function acelerar(){
    velocidadeNave += 5
}
function desacelerar(){
    velocidadeNave -= 5
}

do{
    switch(opcao){
        case "1":
            acelerar()
            alert("Acelerando... ")
        break
        case "2":
            desacelerar()
            alert("Desacelerando...")
            if(velocidadeNave < 0){
               velocidadeNave = 0
            }
        break
        case "3":
            alert("Encerrando o programa")
        break
    }  
    opcao = prompt("O que deseja fazer?" + 
                   "\n1 - Acelerar a nave" + 
                   "\n2 - Desacelerar a nave" + 
                   "\n3 - Sair")
} while(opcao != "3")

alert("| Dados de bordo |" + "\nNome da nave: " + nave + "\nVelocidade: " + velocidadeNave + "km/s")