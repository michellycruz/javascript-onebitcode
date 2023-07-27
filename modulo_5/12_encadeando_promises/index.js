function checkAge(age){
    return new Promise((resolve, reject) => {
        if(age){
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
} //verifica se uma pessoa é maior de idade

function getAge(birthday){
    return new Promise((resolve, reject) => {
        if(birthday){
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
} //devolve uma idade a partir de uma data de aniversário

getAge('1999-09-02').then(age => {
    checkAge(age).then(isOver18 => {
        if(isOver18){
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        }
    }).catch(err => {
        console.log(err.message)
    })
}).catch(err => {
    console.log(err.message)
})