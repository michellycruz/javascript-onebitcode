const Address = require("./Address")

class Person {
    constructor(name, street, number, neighborhood, city, state){
        this.name = name
        this.address = new Address(street, number, neighborhood, city, state)
    }
}

module.exports = Person