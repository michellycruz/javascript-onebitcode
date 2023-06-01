const arr = ["Sigma", "Lucio", "Heinhart", "Torbjorn", "Pharah", "Moira", "Ramatra", "Bastion"]
console.log(arr)

//Adicionar elementos
//push
let tamanho = arr.push("Reaper")
console.log(arr)
console.log(tamanho)

//unshift
tamanho = arr.unshift("Reaper")
console.log(arr)
console.log(tamanho)

//Remover Elementos
//pop
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)