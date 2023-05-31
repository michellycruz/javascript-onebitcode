//# [Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.](https://www.mindmeister.com/map/2783164201)

const numero = (prompt("Escolha um número"))
let contas = ""

for(let indice = 0; indice <= 20; indice++) {
    let resultado = indice * numero
    contas += "\n" + numero + " * " + indice + " = " + resultado
}

alert("Esses são os resultados na tabuada de " + numero + contas)