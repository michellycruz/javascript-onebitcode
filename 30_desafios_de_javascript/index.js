let notaAlunos = [5.3, 8, 10, 9, 7]
let notaAlunosTotal
let somaDasNotas = 0

function media (){
    for(i = 0; i < notaAlunos.length ; i++){
        somaDasNotas += notaAlunos[i] 
    }
    let mediaFinal = somaDasNotas / notaAlunosTotal
    console.log(mediaFinal)
}
media()