function execute(){
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            if (false) {
                reject(false)
            } else {
                console.log('Resolvendo a promise...')
                resolve(45)
            }

        }, 1000 * 2)
    })
}

execute().then((result) => {  // "then" serve para lidar com uma promise resolvida
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log('A promisse foi finalizada')
})