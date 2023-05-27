/*
# [Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras: 
    
- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa. 
    
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa. 

- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0. 

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.](https://www.mindmeister.com/map/2783164157)

1ª inserir nome e poder de ataque de um personagem
2ª nome e quantidade de vida e poder de defesa de outro personagem
3ª possui escudo?

1ª ataque maior que defesa e não possui escudo = ataque - defesa




*/

let atacante = prompt("Qual o nome do personagem atacante?")
let ataque = parseFloat(prompt("Quanto é o poder de ataque?"))

let defensor = prompt("Qual o nome do defensor?")
let defesa = parseFloat(prompt("Quanto é seu poder de defesa?"))
let vida = parseFloat(prompt("Qual a quantidade de pontos de vida que ele possui?"))
let escudo = prompt("Ele possui um escudo? sim/não")
let dano

if (ataque > defesa && escudo === "não") {

    dano = ataque - defesa;
    vida = vida - dano;
    alert("O personagem "+ atacante + " fez " + dano + " pontos de ataque.");

    window.alert("Resultados finais: \n" +

    atacante + " fez " + dano + " pontos de ataque \n" +

    defensor + " ficou com " + vida + " pontos de vida"

);

} else if (ataque > defesa && escudo === "sim") {

    dano = (ataque - defesa) * 0.5;
    vida = vida - dano;
    alert("O personagem "+ atacante + " fez " + dano + " pontos de ataque.");

        window.alert("Resultados finais: \n" +

        atacante + " fez " + dano + " pontos de ataque \n" +

        defensor + " ficou com " + vida + " pontos de vida"

);
    
}   else if (ataque <= defesa) {
    dano = 0;
    vida = vida - dano;

    alert("O personagem "+ atacante + " fez " + dano + " pontos de ataque.");

        window.alert("Resultados finais: \n" +

        atacante + " fez " + dano + " pontos de ataque \n" +

        defensor + " ficou com " + vida + " pontos de vida"

    );
}

