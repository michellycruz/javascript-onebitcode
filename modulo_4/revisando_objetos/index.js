//const book = {
//    title: 'Eragon',
//    pages: 468,
//    published: true,
//    inStock: 20,
//    tags: ['Fantasy', 'adventure', 'medieval'],
//    author: {
//        name: 'Christopher Paolini'
//    },
//    addOnStock(quantity){
//        this.inStock += quantity
//    }
//}

function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock (quantity){
        this.inStock += quantity
    }
    this.save = function(){
        //salva no banco de dados
    }
}

const author = {name: 'Christopher Paolini'}
const tags = ['Fantasy', 'adventure', 'medieval']
const eragon = new Book('Eragon', 468, tags, author) //"new" forma de chamar as funções construtoras

console.log(eragon)