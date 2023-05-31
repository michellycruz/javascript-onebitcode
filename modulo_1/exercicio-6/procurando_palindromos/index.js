/*Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

1. Solicite uma palavra ao usuário utilizando a função **`prompt()`** e armazene-a em uma variável.
2. Crie uma variável para armazenar a palavra invertida. Você pode inicializá-la como uma string vazia.
3. Utilize um loop **`for`** para iterar sobre cada letra da palavra digitada. Lembre-se de usar o método **`length`** da string para determinar o número de caracteres.
4. Dentro do loop, acesse cada letra da palavra e adicione-a à variável da palavra invertida, de trás para frente.
5. Após o loop, verifique se a palavra digitada é igual à palavra invertida. Você pode usar uma estrutura condicional **`if`** para isso.
6. Se a palavra for um palíndromo, exiba uma mensagem indicando que é um palíndromo.
7. Caso contrário, exiba a palavra original e a palavra invertida para mostrar a diferença.

Lembre-se de que é importante considerar a manipulação de strings e o uso dos métodos apropriados para comparar as palavras e construir a palavra invertida.

*/

const palavra = prompt("VERIFICADOR DE PALINDROMOS" + "\n\n Qual palavra você gostaria de saber se é um palíndromo ou não?")
let palavraInvertida = ""

	for(indice = palavra.length - 1 ; indice >= 0 ; indice--){
		palavraInvertida += palavra[indice]
	}

		if(palavra === palavraInvertida){
			alert("Essa palavra é um palíndromo " + "\n\nNormal: " + palavra + "\n\nInvertido: " + palavraInvertida)
		} else {
			alert("Essa não palavra é um palíndromo " + "\n\nNormal: " + palavra + "\n\nInvertido: " + palavraInvertida)
		}