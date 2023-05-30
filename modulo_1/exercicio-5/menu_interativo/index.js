/*
# [Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.](https://www.mindmeister.com/map/2783164187)

1. Declare uma variável para armazenar a opção escolhida pelo usuário.
2. Use um loop (while, do while) para exibir o menu e obter a entrada do usuário repetidamente até que a opção "Encerrar" seja escolhida.
3. Dentro do loop, use uma estrutura de controle (if else, switch) para executar a ação correspondente à opção escolhida pelo usuário.
4. Após executar a ação, exiba uma mensagem indicando qual opção foi escolhida e exiba novamente o menu.
5. Continue o loop até que o usuário escolha a opção "Encerrar". Nesse caso, exiba uma mensagem de encerramento e finalize o programa.
*/

let opcao = ""


    while(opcao !== "5"){
    opcao = prompt("Bem vindo a padaria, o que você gostaria de comer?\n"
        +
        "1 - Pão na chapa" +
        "\n2 - Bolo" +
        "\n3 - Pão de Queijo" +
        "\n4 - Broa de milho" +
        "\n5 - encerrar")

        if (opcao === "1"){
            alert("Você comprou um pão na chapa")
        } else if (opcao === "2"){
            alert("Você comprou um bolo")
        } else if (opcao === "3"){
            alert("Você comprou um pão de queijo")
        } else if (opcao === "4"){
            alert("Você comprou uma broa de milho")
        }
    }

    alert("Encerrando o programa...")