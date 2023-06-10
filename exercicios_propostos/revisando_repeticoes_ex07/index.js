let nave = prompt("Informe o nome da nave")
let nomeInvertido = ""

for(let i = nave.length - 1 ; i >= 0 ; i--){
    if(nave[i] == "e"){
        break
    }
    nomeInvertido += nave[i]
}


alert("Nome da nave: " + nave + "\nNome invertido: " + nomeInvertido)