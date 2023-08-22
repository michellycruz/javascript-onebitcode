alert("Bem vindo ao verificador de difereça de idade")
let nomePMV = prompt("Por favor, informe o nome da pessoa mais velha")
let idadePMV = prompt("Por favor informe a idade da pessoa mais velha")

let nomePMN = prompt("Por favor, informe o nome da pessoa mais nova")
let idadePMN = prompt("Por favor, informe a idade da pessoa mais nova")

let diferencaIdade = idadePMV - idadePMN

alert(
`|Pessoa mais velha|
Nome: ${nomePMV}
Idade: ${idadePMV}

|Pessoa mais nova|
Nome: ${nomePMN}
Idade: ${idadePMN}
Diferença de idade: ${diferencaIdade} anos
`)