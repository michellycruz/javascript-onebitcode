class Character{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }
    atacar(personagemAlvo){
        personagemAlvo.vida -= this.ataque - personagemAlvo.defesa
    }
}

module.exports = Character