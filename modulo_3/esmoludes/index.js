import { name, label, input, br } from "./functions.js"

console.log(name)
console.log(label({for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({id: 'fullname', name: 'fullname', placeholder: 'Digiteseu nome completo...'}))
console.log(br())