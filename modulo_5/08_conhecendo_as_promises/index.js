// pending - resolve - reject
const p = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada')
    setTimeout(() => {
        //if (true){
        //   reject(false)
        //}
        console.log('Resolvendo a promise...')
        resolve(true)
    }, 1000 * 2)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 3)