/* # [Escrever um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão). Após calcular os resultados o programa deve exibi-los na tela.](https://www.mindmeister.com/map/2783164113) */


let n1 = prompt("Digite um número:")
let n2 = prompt("Digite outro número:")


let soma = parseFloat(n1) + parseFloat(n2)
let sub = n1 - n2
let mul = n1 * n2
let div = n1 / n2


alert(
    "A soma de " + n1 + " + " + n2 + " = " + soma +
    "\nA subtração de " + n1 + " - " + n2 + " = " + sub +
    "\nA multiplicação de " + n1 + " * " + n2 + " = " + mul +
    "\nA divisão de " + n1 + " / " + n2 + " = " + div
)



/* alert("A soma de " + n1 + " + " + n2 + " = " + soma)
alert("A subtração de " + n1 + " - " + n2 + " = " + sub)
alert("A multiplicação de " + n1 + " * " + n2 + " = " + mul)
alert("A divisão de " + n1 + " / " + n2 + " = " + div) */