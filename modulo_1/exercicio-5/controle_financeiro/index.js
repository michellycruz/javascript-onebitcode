/*
# [Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.](https://www.mindmeister.com/map/2783164189)

Dicas:

1. Comece solicitando a quantidade inicial de dinheiro disponível ao usuário utilizando a função **`prompt()`**.
2. Crie uma variável para armazenar a quantidade de dinheiro e atribua a ela o valor informado pelo usuário.
3. Crie um loop (while, do while) para exibir o menu e processar as opções escolhidas pelo usuário. O loop deve continuar até que o usuário escolha a opção de sair.
4. Dentro do loop, utilize uma estrutura de controle (if else, switch) para tratar cada opção escolhida pelo usuário.
5. Se o usuário escolher a opção de adicionar dinheiro, solicite a quantidade a ser adicionada utilizando **`prompt()`**, converta o valor para um número (utilizando **`parseInt()`** ou **`parseFloat()`**) e adicione-o à variável que armazena a quantidade de dinheiro.
6. Se o usuário escolher a opção de remover dinheiro, siga um processo similar ao passo anterior, porém subtraindo o valor da quantidade de dinheiro.
7. Se o usuário escolher a opção de sair, encerre o loop utilizando uma condição adequada.
8. A cada iteração do loop, exiba na tela a quantidade de dinheiro atualizada, juntamente com as opções disponíveis.

*/


let dinheiro = parseFloat(prompt("Qual a quantidade de dinheiro disponível?"))
let opcao = ""
let somar = 0
let subtrair = 0

    while (opcao !== "sair") {
    opcao = prompt("Você tem " + dinheiro + " de saldo, gostaria de adicionar, remover ou sair?")

        switch (opcao) {

            case "adicionar":
        somar = parseFloat(prompt("Quanto você gostaria de adicionar?"))
        dinheiro += somar

            break

            case "remover": 
        subtrair = parseFloat(prompt("Quanto você gostaria de remover?"))
        dinheiro -= subtrair

        }
 
    }

