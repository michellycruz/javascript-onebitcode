let pokemon = "Charmander"

function evoluir(){
    pokemon = "Charmeleon"
}

//console.log(pokemon)
//evoluir()
//console.log(pokemon)

function criarAnimal(){
    let animal = "Gato"
}

//criarAnimal()
//console.log(animal)


function avaliarNota(nota) {
    if(nota > 60){
        var aprovado = true
        let situcao = "Aprovado!"
    } else{
         aprovado = false
         situcao = "Reprovado!"
    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}

avaliarNota(80)