let dobra = 0
let opcao

let nave = prompt("Bem vindo ao sistema de navegação para astronautas, por favor, digite o nome da nave em que vai realizar a viagem")
alert("Astronautas, estão preparados para a viagem?")
alert("A nave " + nave + " está partindo")

while (opcao != "2"){
    opcao = prompt("Gostaria de realizar uma dobra espacial?" + "\n1 - Sim" + "\n2 - não")
    if(opcao == "1"){
        dobra++
        alert("Dobra realizada com sucesso!")
    } 
}

alert("Foi um prazer viajar conosco")
alert("Nome da nave: "+ nave + "\nTotal de dobras realizadas: " + dobra)
