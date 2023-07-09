let notaAlunos = [5.3, 8, 10, 9, 7]
let sum = 0

function media (){
    for(i = 0; i < notaAlunos.length ; i++){
        notaAlunos.length /= notaAlunos[i]
    }
    let mediaFinal = sum / notaAlunos
    console.log(mediaFinal)
}

console.log(sum)
console.log(notaAlunos)
media()
