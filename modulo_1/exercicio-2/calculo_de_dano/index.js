/*
# [Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras: 
    
- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa. 
    
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa. 

- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0. 

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.](https://www.mindmeister.com/map/2783164157)
*/

const personagem1 = prompt("Informe o nome do primeiro personagem")
const poderAtaque = parseFloat(prompt("Informe o poder de ataque que ele possui"))

const personagem2 = prompt("Informe o nome do segundo personagem")
let vidaPersonagem2 = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDefesa = parseFloat(prompt("Qual seu poder de defesa?"))
const escudo = prompt("Possui escudo? sim/não")

let danoCausado = 0

    if(poderAtaque > poderDefesa && escudo == "não") {
        danoCausado = poderAtaque - poderDefesa
    } else if (poderAtaque > poderDefesa && escudo == "sim"){
        danoCausado = (poderAtaque / 2) - poderDefesa
    } else if (poderAtaque <= poderDefesa){
        danoCausado = 0
    }

alert("| Personagem atacante |" + 
"\nNome: " + personagem1 + 
"\nPoder de ataque: " + poderAtaque +
"\n\n| Personagem defesor |" + 
"\nNome: " + personagem2 + 
"\nPossui escudo: " + escudo +
"\nPoder de defesa: " + poderDefesa +
"\nVida antes do ataque: " + vidaPersonagem2 +
"\nPontos de vida restantes: " + (vidaPersonagem2 - danoCausado)
)

