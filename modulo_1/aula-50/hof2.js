function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}


const lista = ["Maçã", "Banana", "Laranja", "Limão"]

for (let i = 0; i< lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento) //callBackfn


lista.forEach(function (elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})