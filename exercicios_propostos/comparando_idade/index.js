alert("Bem vindo ao verificador de difereça de idade")
let nomePMV = prompt("Por favor, informe o nome da pessoa mais velha")
let idadePMV = prompt("Por favor informe a idade da pessoa mais velha")

let nomePMN = prompt("Por favor, informe o nome da pessoa mais nova")
let idadePMN = prompt("Por favor, informe a idade da pessoa mais nova")

let diferencaIdade = idadePMV - idadePMN

alert("| Pessoa mais velha |" +
      "\nNome: " + nomePMV +
      "\nIdade: " + idadePMV +
      "\n\n| Pessoa mais nova |" +
      "\nNome: " + nomePMN +
      "\nIdade: " + idadePMN +
      "\n\n| Diferença de idade |" +
      "\nA diferença de idade entre as duas pessoas é de " + diferencaIdade + " anos"
      )