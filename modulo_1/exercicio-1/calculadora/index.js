/* # [Escrever um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão). Após calcular os resultados o programa deve exibi-los na tela.](https://www.mindmeister.com/map/2783164113) */


let n1 = parseFloat(prompt("Digite um número"))
let n2 = parseFloat(prompt("Digite outro número"))


let soma = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2

alert("Quatro operações básicas entre " + n1 + " e " + n2 + " :" +
      "\n\n" + n1 + " + " + n2 + " = " + soma +
      "\n" + n1 + " - " + n2 + " = " + sub +
      "\n" + n1 + " * " + n2 + " = " + mult +
      "\n" + n1 + " / " + n2 + " = " + div
)