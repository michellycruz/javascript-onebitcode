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