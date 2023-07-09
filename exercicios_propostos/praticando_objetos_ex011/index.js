let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function accelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity){
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA" + 
              "\nVelocidade da nave: " + spaceship.velocity + "km/s" + 
              "\nVelocidade máxima da nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop (){
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity
    + "\nVelocidade máxima da nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu(){
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1 - Acelerar\n2 - Parar")
        switch(chosenOption){
            case "1":
                accelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()