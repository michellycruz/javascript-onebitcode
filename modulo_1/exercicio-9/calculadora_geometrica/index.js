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
            //área do triângulo: base * altura / 2
        let baseTriangulo = parseFloat(prompt("Por favor, informe o valor da base do triângulo"))
        let alturaTriangulo = parseFloat(prompt("Por favor, informe o valor da altura do triângulo"))

            function triangulo(baseTriangulo, alturaTriangulo){

                const areaTriangulo = baseTriangulo * alturaTriangulo / 2
                return areaTriangulo
            }

         alert("A área do triangulo é de = " + triangulo(baseTriangulo, alturaTriangulo))

        break

        case "2":
            // área do retângulo: base * altura
        let baseRetangulo = parseFloat(prompt("Por favor, informe o valor da base do retângulo"))
        let alturaRetangulo = parseFloat(prompt("Por favor, informe o valor da altura do retângulo"))
        
            function retangulo(baseRetangulo, alturaRetangulo){
                const areaRetangulo = baseRetangulo * alturaRetangulo
                return areaRetangulo
            }
        
        alert("A área do retângulo é de = " + retangulo(baseRetangulo, alturaRetangulo))
        
        break

        case "3":
            //área do quadrado: lado²
        let ladoQuadrado = parseFloat(prompt("Por favor, informe o valor do lado do quadrado"))
            
            function quadrado(ladoQuadrado){
                const areaQuadrado = ladoQuadrado * ladoQuadrado
                return areaQuadrado
            }
        
        alert("A área do quadrado é de = " + quadrado(ladoQuadrado))

        break

        case "4":
            //- área do trapézio: (base maior + base menor) * altura / 2
        let baseMaior = parseFloat(prompt("Por favor, informe o valor da base maior do trapézio"))
        let baseMenor = parseFloat(prompt("Por favor, informe o valor da base menor do trapézio"))
        let alturaTrapezio = parseFloat(prompt("Por favor, informe a altura do trapézio"))

            function trapezio(baseMaior, baseMenor, alturaTrapezio) {
                const areaTrapezio = (baseMaior + baseMenor) * alturaTrapezio / 2
                return areaTrapezio
            }
        
        alert("A área do trapézio é de = " + trapezio(baseMaior, baseMenor, alturaTrapezio))

        break

        case "5":
            //- área do círculo: pi * raio² (considere pi = 3.14)
        let raio = parseFloat(prompt("Por favor, informe o valor do raio"))
        let pi = 3.14

            function circulo(raio, pi){
                const areaCirculo = (pi * (raio * raio))
                return areaCirculo
            }
        
        alert("A área do circulo é de = " + circulo(raio, pi))

     }
} while(opcao !== "6")