function normalSum (a, b){
    return a + b
}

console.log(`Soma normal: ${normalSum(3, 5)}`)


const anonymousSum = function(a, b){
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 7)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(3, 3)}`)

const subtract = (a, b) => a - b

console.log(`Subtração arrow function: ${subtract(10, 5)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 32

console.log(double(number))