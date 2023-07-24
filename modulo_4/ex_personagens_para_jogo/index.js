class Character{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }
    atacar(PersonagemAtacado){
        return this.vida - this.ataque
    }
}

class Thief extends Character{
    atacar(PersonagemAtacado){
        return this.vida - this.ataque * 2
    }
}

class Mage extends Character{
    constructor(pontosMagia){
        this.pontosMagia = pontosMagia
    }
    atacar(PersonagemAtacado){
        return this.vida - (this.ataque + this.pontosMagia)
    }
    curar(PersonagemCurado){
        return this.vida + this.pontosMagia * 2
    }
}

class Warrior extends Character{
    constructor(pontosEscudo){
        this.pontosEscudo = pontosEscudo
        this.position = this.position
    }
    atacar(PersonagemAtacado){
        if(this.position === ataque){
            return this.vida - this.ataque
        } else{
            return this.defesa += this.pontosEscudo
        }
    }
}