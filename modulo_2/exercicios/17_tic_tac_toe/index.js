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
}

function addPlayers(){
    const ul = document.getElementById('players')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = player1 + ' versus ' + player2

    ul.appendChild(newLi)
}