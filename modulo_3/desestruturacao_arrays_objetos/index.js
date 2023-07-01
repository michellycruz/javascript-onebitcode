const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anakin', 'Padme']
}

const name = person.name
const { job, parents } = person
console.log(name, job, parents)

const [father, mother] = parents
console.log(father, mother)

function createUser(person){
    
}