const vBoard = []
let btnRef = document.querySelectorAll('.button-option')
let turnPlayer = ''

let winning = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 9],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]

let xTurn = true;
let count = 0;

function gameSection(){
    const gameSection = document.getElementById('gameSection')
    gameSection.style.display = 'none'
}

gameSection()

document.getElementById('startButton').addEventListener('click', function(ev){
    ev.preventDefault();
    start();
})

function start(){
    const player1 = document.getElementById('player1').value 
    const player2 = document.getElementById('player2').value 

    if (player1 === '' || player2 === ''){
        alert('Por favor, insira os nomes dos jogadores.')
        return
    }

    const formSection = document.getElementById('formSection')
    formSection.style.display = 'none'
    const gameSection = document.getElementById('gameSection')
    gameSection.style.display = 'block'

    addPlayers(player1, player2)
}

function addPlayers(player1, player2){
    const section = document.getElementById('gameSection')
}

