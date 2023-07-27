const numbers = [4, 9, 5, true, 13, 77]
function asyncSquare(x) {
    return new Promise((resolve, reject) =>{
        if (typeof x !== 'number') {
            reject(false)
        }
        resolve(x * x)
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
})