const vBoard = []
let turnPlayer = ''

function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

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

