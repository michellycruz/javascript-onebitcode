function gameSection(){
    const gameSection = document.getElementById('gameSection')
    gameSection.style.display = 'none'
}

gameSection()

function form(){
    const player1 = getElementById('player1').value 
    const player2 = getElementById('player2').value 
    console.log(player1, player2)
}

document.getElementById('startButton').addEventListener('click', function(ev){
    ev.preventDefault();
    start();
})

function start(){
    const formSection = document.getElementById('formSection')
    formSection.style.display = 'none'
    const gameSection = document.getElementById('gameSection')
    gameSection.style.display = 'block'
}
