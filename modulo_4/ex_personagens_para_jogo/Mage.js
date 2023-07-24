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