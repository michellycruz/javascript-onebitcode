/*
# [Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.](https://www.mindmeister.com/map/2783164177)
*/

const turista = prompt("Eai turista?! Qual o seu nome??")
let visitou = prompt("Você já visitou alguma cidade?")
let cidade = ""
let contagem = 0
let cidadesVisitadas = ""

while(visitou === "sim"){
    cidade = prompt("Qual o nome da cidade você visitou?")
    cidadesVisitadas += "\n- " + cidade
    contagem++
    visitou = prompt("Você visitou mais alguma?")
}

alert("Nome do turista: " + turista +
      "\nCidades visitadas: " + contagem +
      "\nNomes das cidades: " + cidadesVisitadas)