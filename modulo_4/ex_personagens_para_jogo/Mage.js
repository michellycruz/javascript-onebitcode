const Character = require("./Character");

class Mage extends Character{
    constructor(nome, vida, ataque, defesa, pontosMagia){
        super(nome, vida, ataque, defesa)
        this.pontosMagia = pontosMagia
    }
    atacar(personagemAlvo){
        personagemAlvo.vida -= (this.ataque + this.pontosMagia) - personagemAlvo.defesa
    }
    curar(personagemAlvo){
        personagemAlvo.vida += this.pontosMagia * 2
    }
}

module.exports = Mage