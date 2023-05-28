/*
    Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são: - milímetro (mm) - centímetro (cm) - decímetro (dm) - decâmetro (dam) - hectômetro (hm) - quilômetro (km) O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado. O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

*/

    const metros = prompt("Defina o valor em metros que deseja converter")
    const resultado = prompt("Para qual unidade de medida gostaria de converter? \na) milímetro (mm) \nb) centímetro (cm) \nc) decímetro (dm) \n d) decâmetro (dam) \ne) hectômetro (hm) \nf) quilômetro (km)")
    const resultadoNumerico = parseFloat(metros)

    switch (resultadoNumerico){
        case "a":
            (resultado = (metros * 1000))
        alert("O valor de " + metros + "m em milímetros é " + resultado + "mm")

        break

        case "b":
            (resultado = (metros * 100))
        alert("O valor de " + metros + "m em centímetros é " + resultado + "cm")

        break

        case "c":
            (resultado = (metros * 10))
        alert("O valor de " + metros + "m em decímetros é " + resultado + "dm")

        break

        case "a":
            (resultado = metros * 0.1)
        alert("O valor de " + metros + "m em decâmetros é" + resultado + "dam")

        break

        case "a":
            (resultado = metros * 0.01)
        alert("O valor de " + metros + "m em hectômetros é" + resultado + "hm")

        break

        case "a":
            (resultado = metros * 0.001)
        alert("O valor de " + metros + "m em quilômetros é" + resultado + "km")

        break

        default:
        alert("O valor é inválido")
    }