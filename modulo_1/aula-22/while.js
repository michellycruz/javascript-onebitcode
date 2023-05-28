let velocidade = 80


    while (velocidade > 0){
        alert("o carro está a " + velocidade + " km/h")
        velocidade -= 20
        alert("Diminuindo 20km")

        if (velocidade === 40){
        break}
    }

    alert("O carro parou")