class User {
    constructor (fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        if(this.email === email && this.password === password){
            console.log('Login realizado com sucesso!!')
        } else{
            console.log('Falha ao realizar login, email ou senha incorretos')
        }
    }
}

const Maria = new User('Maria do Carmo', "maria@email.com", "1234")

console.log(Maria)
Maria.login('maria@email.com', '1234')