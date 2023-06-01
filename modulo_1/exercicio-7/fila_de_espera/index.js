/*
# [Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.](https://www.mindmeister.com/map/2783164265)

1º Crie um array vazio para armazenar a fila de pacientes
2º Utilize um loop while para exibir o menu interativo e realizar as ações até que a opção "Sair" seja escolhida
3º Para exibir a lista de pacientes em ordem e sua posição na fila, utilize um loop for
*/

let filaDeEspera = []
let opcao = ""

    do{
        opcao = prompt("O que deseja fazer? " + "\n\n1 - Novo paciente " + "\n\n2 - Consultar paciente " + "\n\n3 - Sair")
           

        if(opcao === "1"){
            let nomePaciente = prompt("Qual o nome do novo paciente?")
            nomePaciente = filaDeEspera.push(nomePaciente)

        } else if (opcao === "2") {
            let consulta = filaDeEspera.shift()
            if(consulta){
                alert("Paciente consultado = " + consulta)
            } else{
                alert("A fila de espera está vazia.")
            }
        }

    
        for (let indice = 0; indice < filaDeEspera.length; indice++){
        nomePaciente += "- " + (indice + 1) + "º " + filaDeEspera[indice] + "\n"
        opcao = prompt("Essa é a fila de Espera: " + nomePaciente + "\n\nO que deseja fazer? " + "\n1 - Novo paciente " + "\n2 - Consultar paciente " + "\n3 - Sair")
        }

    } while (opcao !== "3")