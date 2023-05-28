/*
# [Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.](https://www.mindmeister.com/map/2783164177)
*/


const turista = prompt("Qual o nome do turista?")
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? sim/não")

    while (continuar === "sim"){
        let cidade = prompt("Qual o nome da cidade que você visitou?")
        cidades += " - " + cidade + "\n"
        contagem++
        continuar = prompt("Você visitou mais alguma outra cidade? sim/não")
    }

alert(
    
    "Nome: " + turista + 
    "\nVisitou: " + contagem + " cidades" + 
    "\nCidades visitadas:\n" + cidades
    
    )