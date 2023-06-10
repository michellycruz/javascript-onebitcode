let nave = prompt("Por favor, informe o nome da nave")
let substituirCaractere = prompt("O nome da nave foi definido como: " + nave + "\nQual caractere deste nome você gostaria de substituir?")
let novoCaractere = prompt("Qual caractere deseja colocar no lugar do " + substituirCaractere + "?")

for(let i = 0; i < nave.length; i++){
     if(nave[i] === substituirCaractere){
        nave = nave.slice(0, i) + novoCaractere + nave.slice(i + 1)
     }
}

alert("O nome da nave foi alterado para: " + nave)