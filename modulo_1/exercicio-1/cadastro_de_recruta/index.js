/*
# [Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são: - o primeiro nome - o sobrenome - o campo de estudo - o ano de nascimento Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).](https://www.mindmeister.com/map/2783164111)
 */

const nome = prompt("Informe o seu nome: ")
const sobreNome = prompt("Informe seu sobre nome: ")
const campoDeEstudo = prompt("Informe o campo de estudo: ")
const nascimento = prompt("Informe seu ano de nascimento: ")

let anoAtual = new Date().getFullYear()
let idade = 2023 - 1998

console.log(idade)