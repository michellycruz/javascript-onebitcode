const arr = ["Sigma", "Lucio", "Heinhart", "Torbjorn", "Pharah", "Moira", "Ramatra", "Bastion"]
console.log(arr)

//Adicionar elementos
//push
let tamanho = arr.push("Reaper")
console.log(arr)
console.log(tamanho)

//unshift 
tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

//Remover Elementos
//pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Remover elementos no começo do array
//shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um elemento
//includes
const inclui = arr.includes("Torbjorn")
console.log(inclui)

//indexOf <-saber a posição no array
const indice = arr.indexOf("Torbjorn")
console.log(indice)

//cortar e concatenar