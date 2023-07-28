async function imc(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number'){
        return Promise.reject('os argumentos precisam ser do tipo número')
    }
        return weight / (height * height)
}

async function showImc(weight, height){
try {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
    const result = await imc(weight, height)
    console.log(`O resultado do IMC foi de ${result}.`)
    if(result < 18.5)console.log('Situação: ABAIXO DO PESO')
    else if (result < 25) console.log('Situação: PESO IDEAL')
    else if (result < 30) console.log('Situação: ACIMA DO PESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
} catch (err) {
    console.log(err)
}
}

showImc(55, 1.65)
showImc(79, 1.60)
showImc(180, 1.82)
showImc(46, 1.60)