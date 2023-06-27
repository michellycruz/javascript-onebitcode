let turnPlayer = ''
let btnRef = document.querySelectorAll('.button-option')
let restartBtn = document.getElementById('reset')

let winningPattern = [

    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]

]

let xTurn = true;
let count = 0

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

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true))
}

const enableButtons = () => {
    btnRef.forEach ((element) => {
        element.innerText = ''
        element.disabled = false
    })
}

//resetar jogo
restartBtn.addEventListener('click', () => {
    count = 0
    enableButtons();
})

function addPlayers(player1, player2){
    const section = document.getElementById('gameSection')
}

btnRef.forEach((element) => {
    element.addEventListener('click', () => {
        if (xTurn){
            element.innerText= 'X'
            element.disabled = true
        } else{
            xTurn = true
            element.innerText='O'
            element.disabled = true
        }
        count += 1
        if (count == 9){
            drawFunction()
        }
        winCheker()
    })
})

window.onload = enableButtons

