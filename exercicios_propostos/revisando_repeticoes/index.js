let nave = prompt("Informe o nome da nave")
let palavraInvertida = ""

for(let i = nave.length - 1; i >= 0 ; i--){
    palavraInvertida += nave[i];
    if(nave[i] === "e"){
        break;
    }
}

alert("Palavra original: " + nave + "\nPalavra invertida: " + palavraInvertida)