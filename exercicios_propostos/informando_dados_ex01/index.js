alert("Bem-vindo! A seguir pediremos que informe alguns dados")


let nome = prompt("Por favor, informe o seu nome")
let idade = prompt("Por favor, informe a sua idade")

let confirmacao = confirm("A sua idade é " + idade)

alert("Nome: " + nome + "\nIdade: " + idade + "\nConfirmação de idade: " + confirmacao)