/*
### Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

function calcularMedia(a, b){
    const media = (a + b) / 2
    return media
}

*/ 

function areaTriangulo(){
    const baseTriangulo = parseFloat(prompt("Por favor, informe o valor da base do triângulo"))
    const alturaTriangulo = parseFloat(prompt("Por favor, informe a altura do triângulo"))
    return baseTriangulo * alturaTriangulo / 2
}

function areaRetangulo(){
    const baseRetangulo = parseFloat(prompt("Por favor, informe o valor da base do retângulo"))
    const alturaRetangulo = parseFloat(prompt("Por favor, informe a altura do retângulo"))
    return baseRetangulo * alturaRetangulo
}

function areaQuadrado(){
    const ladoQuadrado = parseFloat(prompt("Por favor, informe o valor do lado do quadrado"))
    return ladoQuadrado * ladoQuadrado
}

function areaTrapezio(){
    //- área do trapézio: (base maior + base menor) * altura / 2
    const baseMaior = parseFloat(prompt("Por favor, informe a base maior do trapézio"))
    const baseMenor = parseFloat(prompt("Por favor, informe a base menor do trapézio"))
    const altura = parseFloat(prompt("Por favor, informe a altura do trapézio"))
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(){
    //- área do círculo: pi * raio² (considere pi = 3.14)
    const pi = 3.14
    const raio = parseFloat(prompt("Por favor, informe a medida do raio do circulo"))
    return pi * (raio * raio)
}

function exibirMenu(){
    return prompt (
    "Essa é a calculadora geométrica, o que gostaria de fazer?" +
    "\n\n1 - Calcular a área do Triangulo" +
    "\n2 - Calcular a área do retângulo" +
    "\n3 - Calcular a área do quadrado" +
    "\n4 - Calcular a área do trapézio" +
    "\n5 - Calcular a área do Circulo" +
    "\n6 - Sair"
    )
}

function executar(){
    let opcao = ""

    do{
        opcao = exibirMenu()
        let resultado

        switch (opcao){
        case "1":
            resultado = areaTriangulo()
            alert("A área do triangulo é de: " + resultado)
            break

        case "2":
            resultado = areaRetangulo() 
            alert("A área do retângulo é de: " + resultado)
            break

        case "3":
            resultado = areaQuadrado()
            alert("A área do quadrado é de: " + resultado)
            break

        case "4":
            resultado = areaTrapezio()
            alert("A área do trapézio é de: " + resultado)
            break

        case "5":
            resultado = areaCirculo()
            alert("A área do circulo é de: " + resultado)
            break

        case "6":
            alert("Finalizando")
            break

        default: 
        alert("Comando inválido")
        }

    }while(opcao !== "6")
}

executar()
