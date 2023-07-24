class Wallet{
    #amount
    #username
    constructor(){
        this.#amount = 100.99 * 100
    }

    get amount(){
        return this.#amount / 100
    }
    //amount(){ método comum
    //    return this.#amount / 100
    //} 

    set username(newUsername){
        if (typeof newUsername === 'string'){
            this.#username = newUsername
        } else {
            console.log('nome de usuário precisa ser do tipo string')
        }
    }

    get username(){
        return this.#username
    }
}

const myWallet = new Wallet()
console.log(myWallet.amount) //quando utilizamos o get não é necessário passar os parênteses
//console.log(myWallet.amount()) <- assim é chamado quando utilizamos o método comum

myWallet.username = 'Michelly'
console.log(myWallet.username)

myWallet.username += " Cruz"
console.log(myWallet.username)

myWallet.username = 4
console.log(myWallet.username)