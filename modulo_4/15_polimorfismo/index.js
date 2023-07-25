class Vehicle{
    move(){
        console.log("O veículo está se movendo.")
    }
}

class Car extends Vehicle{
    move(){
        console.log("O carro está se movendo.")
    }
}

class Ship extends Vehicle {
    move(){
        console.log("O navio está se movendo")
    }
}

class Aircraft extends Vehicle {
    move(speed){
        console.log(`A aeronave está voando a ${speed} km/h.`)
    }
}

const fusca = new Car()
const titanic = new Ship()
const epoch = new Aircraft()

//fusca.move()
//titanic.move()
//epoch.move(80)

function start(vehicle){
    console.log("Iniciando um veículo...")
    vehicle.move()
}

start(fusca)
start(titanic)
start(epoch)