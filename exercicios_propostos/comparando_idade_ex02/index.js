alert("Verificador de diferença de idade");

let idadePMV = prompt("Informe a idade da pessoa mais velha");
let nomePMV = prompt("Informe o nome da pessoa mais velha");


let idadePMN = prompt("Informe a idade da pessoa mais nova");
let nomePMN = prompt("Informe o nome da pessoa mais nova");

let diferencaIdade = idadePMV - idadePMN;

alert(`
|Pessoa mais velha|
Nome: ${nomePMV}
Idade: ${idadePMV}

|Pessoa mais nova|
Nome: ${nomePMN}
Idade: ${idadePMN}

|Diferença|

`);