const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(name, description, height, width, price, inStock = 0){
        super(name, description, price, inStock)
        this.height
        this.width
    }
}