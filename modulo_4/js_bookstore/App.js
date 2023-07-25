const Database = require("./Database")
const Author = require("./entities/Author")
const User = require("./entities/User")

module.exports = class App{
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
        App.#database.find('users')
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthor(){
        return App.#database.find('authors')
    }
}