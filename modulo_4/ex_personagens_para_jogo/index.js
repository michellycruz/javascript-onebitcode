const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");



const mercy = new Mage('Mercy', 150, 80, 60, 200)
const junkrat = new Thief('Junkrat', 200, 150, 30)
const hanzo = new Warrior('Hanzo', 200, 150, 100, 50)

console.table({mercy, junkrat, hanzo})

hanzo.alternarPosicao()
mercy.atacar(hanzo)
junkrat.atacar(mercy)

console.table({mercy, junkrat, hanzo})

hanzo.alternarPosicao()
hanzo.atacar(mercy)
mercy.curar(mercy)
junkrat.atacar(hanzo)
mercy.curar(hanzo)

console.table({mercy, junkrat, hanzo})