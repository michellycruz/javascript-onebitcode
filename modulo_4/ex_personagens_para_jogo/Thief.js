const Character = require("./Character");

class Thief extends Character{
    atacar(personagemAlvo){
       personagemAlvo.vida -= (this.ataque - personagemAlvo.defesa) * 2
    }
}

module.exports = Thief