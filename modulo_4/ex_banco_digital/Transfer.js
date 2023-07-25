const Deposit = require("./Deposit");

module.exports = class Transfer extends Deposit{
    constructor(enviou, recebeu){
        super(value, creationDate)
        this.enviou = enviou
        this.recebeu = recebeu
    }

}