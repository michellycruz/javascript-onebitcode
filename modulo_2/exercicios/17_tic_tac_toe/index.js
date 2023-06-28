const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''
let restartBtn = document.getElementById('resetButton');

// Função para atualizar o título com o nome do jogador
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById('turnPlayer').innerText = playerInput.value
}

// Oculta a seção de jogo
function hideGameSection() {
  const gameSection = document.getElementById('gameSection')
  gameSection.style.display = 'none'
}

hideGameSection();

document.getElementById('startButton').addEventListener('click', function(ev) {
  ev.preventDefault()
  start()
});

// botão "começar" após do preenchimento dos nomes
function start() {
  const player1 = document.getElementById('player1').value;
  const player2 = document.getElementById('player2').value;

  if (player1 === '' || player2 === '') {
    alert('Por favor, insira os nomes dos jogadores.');
    return;
  }

  const formSection = document.getElementById('formSection');
  formSection.style.display = 'none';
  const gameSection = document.getElementById('gameSection');
  gameSection.style.display = 'block';
  }

  function initializeGame(){
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach(function(element){
      element.classList.remove('win')
      element.innerText = ''
      element.addEventListener('click', handleBoardClick)
    })
  }

  function handleBoardClick(ev){
    const region = ev.currentTarget.dataset.region
    const rowColumnPair = region.slit('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
  }

document.getElementById('startButton').addEventListener('click', initializeGame)