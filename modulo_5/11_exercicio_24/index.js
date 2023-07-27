function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number')
            reject('os argumentos precisam ser do tipo número')
        else
            resolve(weight / (height * height))
    })
}

function showImc(weight, height){
    imc(weight, height).then((result) => {
        console.log(`O resultado do IMC foi de ${result}.`)

        if(result < 18.5)console.log('Situação: ABAIXO DO PESO')
        else if (result < 25) console.log('Situação: PESO IDEAL')
        else if (result < 30) console.log('Situação: ACIMA DO PESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }).catch((err) => {
        console.log(err)
    })

    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
}

showImc(55, 1.65)
showImc(79, 1.60)
showImc(180, 1.82)
showImc(46, 1.60)