/*
# [Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.](https://www.mindmeister.com/map/2783164268)

*/

let baralho = []
let opcao = ""

    do{
        opcao = prompt("Cartas no baralho: " + baralho.length +
        "\n\nO que deseja fazer?" + "\n1 - Adicionar uma carta" + "\n2 - Puxar uma carta" + "\n3 - Sair")

        switch(opcao){
            case "1":
                let cartaAdicionada = prompt("Qual carta gostaria de adicionar ao baralho?")
                baralho.push(cartaAdicionada)
                break
            case "2":
                let cartaPuxada = baralho.pop()
                if(!cartaPuxada){
                    alert("Não há nenhuma carta no baralho")
                } else{
                    alert("A carta " + cartaPuxada + " foi retirada do baralho")
                }
                break
            case "3":
                "Finalizando..."
        }
    }while(opcao != "3")