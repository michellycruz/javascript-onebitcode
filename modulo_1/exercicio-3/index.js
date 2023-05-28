/*
    Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são: - milímetro (mm) - centímetro (cm) - decímetro (dm) - decâmetro (dam) - hectômetro (hm) - quilômetro (km) O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado. O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

*/

    const metros = parseFloat(prompt("Defina o valor em metros que deseja converter:"));
    const unidade = prompt("Para qual unidade de medida gostaria de converter? \na) milímetro (mm) \nb) centímetro (cm) \nc) decímetro (dm) \nd) decâmetro (dam) \ne) hectômetro (hm) \nf) quilômetro (km)")

    switch (unidade){
        case "a":
            alert("O valor de " + metros + "m em milímetros é: " + metros * 1000 + "mm")
            break
        case "b":    
            alert("O valor de " + metros + "m em centímetros é: " + metros * 100 + "cm")
            break
        case "c":
            alert("O valor de " + metros + "m em decímetros é: " + metros * 10 + "dm")
            break
        case "d":
            alert("O valor de " + metros + "m em decâmetros é: " + metros * 0.1 + "dam")
            break
        case "e":
            alert("O valor de " + metros + "m em hectômetros é: " + metros * 0.01 + "hm")
            break
        case "f":
            alert("O valor de " + metros + "m em quilômetros é: " + metros * 0.001 + "km")
            break
        default:
        alert("O valor é inválido")
    }