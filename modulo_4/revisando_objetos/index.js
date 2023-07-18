const book = {
    title: 'Eragon',
    pages: 468,
    published: true,
    inStock: 20,
    tags: ['Fantasy', 'adventure', 'medieval'],
    author: {
        name: 'Christopher Paolini'
    },
    addOnStock(quantity){
        this.inStock += quantity
    }
}

console.log(book)

book.addOnStock(50)

book.save = function(){
    //banco de dados
}

console.log[book]