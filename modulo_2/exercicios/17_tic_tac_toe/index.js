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

    const newH3 = document.createElement('h3')
    newH3.className = 'list-item'
    newH3.innerText = player1 + ' versus ' + player2

    section.insertBefore(newH3, section.firstChild);
}