function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"]

// Primeira forma: Chamada direta da função exibirElemento
for (let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

// Segunda forma: Uso do método forEach com a função exibirElemento como argumento
lista.forEach(exibirElemento)

// Terceira forma: Uso de uma função anônima como argumento para o método forEach
lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})
