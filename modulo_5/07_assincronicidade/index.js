// CÓDIGO SÍNCRONO

function step02(){
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')

//CÓDIGO ASSÍNCRONO
console.log('Passo 04')
setTimeout(() => {
    console.log('Passo 05')
}, 1000 * 2) //códigos assíncronos não interrompem a execução do resto do código
console.log('Passo 06')