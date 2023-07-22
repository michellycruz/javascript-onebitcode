class Account {
    #password
    #balance = 5   //classes no js
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password){ //método privado
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'mich@email.com',
    password: '1234'
}

const myAccount = new Account(user)
console.log(myAccount)
console.log(myAccount.getBalance('mich@email.com', '1234'))