const Address = require("./Address")
const Person = require("./Person")

const addr = new Address("7 de setembro", 99, "Centro", "São Fidélis", "RJ")
const maria = new Person("Maria José", addr)

console.log(maria)
console.log(maria.address.fullAddress())