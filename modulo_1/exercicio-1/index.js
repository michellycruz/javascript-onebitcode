/*
# [Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são: - o primeiro nome - o sobrenome - o campo de estudo - o ano de nascimento Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).](https://www.mindmeister.com/map/2783164111)
 */

let nome = prompt("Me informe o seu nome e sobrenome:")
let estudo = prompt("Me informe o seu campo de estudo:")
let ano = prompt("Me informe o ano que você nasceu:")



const anoAtual = new Date().getFullYear()

let idade = (anoAtual - ano)


window.alert(

"Recruta cadastrado com sucesso! |" 
+ " Nome completo: " + nome 
+ " | Campo de estudo: " + estudo 
+ " | Idade: " + idade

)