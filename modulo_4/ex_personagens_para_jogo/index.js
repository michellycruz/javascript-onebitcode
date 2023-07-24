class Mage extends Character{
    constructor(pontosMagia){
        this.pontosMagia = pontosMagia
    }
    atacar(PersonagemAlvo){
        return this.vida - (this.ataque + this.pontosMagia)
    }
    curar(PersonagemAlvo){
        return this.vida + this.pontosMagia * 2
    }
}

class Warrior extends Character{
    constructor(pontosEscudo){
        this.pontosEscudo = pontosEscudo
        this.position = this.position
    }
    atacar(PersonagemAlvo){
        if(this.position === ataque){
            return this.vida - this.ataque
        } else{
            return this.defesa += this.pontosEscudo
        }
    }
}

const fofao = new Thief("Fofao", 40, 60, 10)
const mercy = new Mage("Mercy", 80, 30, 20, 100)
fofao.atacar(mercy)