const Character = require("./Character")

class Warrior extends Character{
    constructor(nome, vida, ataque, defesa, pontosEscudo){
        super(nome, vida, ataque, defesa)
        this.pontosEscudo = pontosEscudo
        this.posicao = 'atacando'
    }
    atacar(personagemAlvo){
        if(this.posicao === 'atacando'){
            super.atacar(personagemAlvo)
        }
    }

    alternarPosicao(){
        if (this.posicao === 'atacando'){
            this.posicao = 'defendendo'
            this.defesa += this.pontosEscudo
        } else {
            this.posicao = 'atacando'
            this.defesa -= this.pontosEscudo
        }
    }
}