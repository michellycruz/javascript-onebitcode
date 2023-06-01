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
//slice
const herois = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(herois)
console.log(outros)


//concat
const sociedade = herois.concat(outros, "Mercy")
console.log(sociedade)

//Substituição dos elementos
//splice -> remover um grupo de elementos do array e substituir esse grupo por outros elementos
const elementosRemovidos = sociedade.splice (indice, 1, "Torbjorn, pai da briguita")
console.log(sociedade)
console.log(elementosRemovidos)

//usando o slice, os elementos removidos são adicionados em uma nova lista, no caso acima "torbjorn" foi adicionado a lista da variável "elementosRemovidos"



