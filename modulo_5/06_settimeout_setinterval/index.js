console.log("Programa iniciado!")

const timeoutId = setTimeout(() => {
    console.log("3 segundos se passaram desde que o programa foi iniciado.")
}, 1000 * 3) //cria um temporizador de 3 segundos (3000 milésimos) // o programa espera 3 segundos para ser executado

clearTimeout(timeoutId)//para o temporizador

let seconds = 0

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if(seconds > 10){
        clearInterval(intervalId) //encerra a cronometragem
        console.log("Programa encerrado...")
    }
}, 1000 * 3) //o setInterval vai executar o programa a cada 3 segundos infinitamente até ser encerrado