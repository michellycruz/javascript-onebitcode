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

let opcao = "" 

do{
    
    opcao = prompt("Essa é a Calculadora Geométrica, qual área você quer calcular?" + "\n1 - Triângulo"+ "\n2 - Retângulo"+ "\n3 - Quadrado"+ "\n4 - Trapézio"+ "\n5 - Circulo" + "\n6 - Sair")


    switch(opcao){
        case "1" :
        let baseTriangulo = parseFloat(prompt("Por favor, informe o valor da base do triângulo"))
        let alturaTriangulo = parseFloat(prompt("Por favor, informe o valor da altura do triângulo"))

            function triangulo(baseTriangulo, alturaTriangulo){
                
                const areaTriangulo = baseTriangulo * alturaTriangulo / 2
                return areaTriangulo
            }

        const areaTriangulo = triangulo(baseTriangulo, alturaTriangulo)
        alert("A área do triangulo é de = " + areaTriangulo)

        break

        case "2":
        const baseRetangulo = parseFloat(prompt("Por favor, informe o valor da base do retângulo"))
        const alturaRetangulo = parseFloat(prompt("Por favor, informe o valor da altura do retângulo"))
        
         function retangulo(baseRetangulo, alturaRetangulo){
            const
         }
    }
} while(opcao !== "6")