alert("Bem-vindo! A seguir pediremos que informe alguns dados")


let nome = prompt("Por favor, informe o seu nome")
let idade = prompt("Por favor, informe a sua idade")

let confirmacao = confirm(`A sua idade é idade ${idade}?`)

alert(`
Nome: ${nome}
Idade: ${idade}
Confirmação de idade: ${confirmacao} `)