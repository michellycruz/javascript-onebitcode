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

  function getWinRegions(){
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
      winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
      winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
      winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
      winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
      winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
      winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
      winRegions.push("0.2", "1.1", "2.0")
    return winRegions
  }

  function disableRegion(element){
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
  }

  function handleBoardClick(ev){
    const span = ev.currentTarget
    const region = span.dataset.region
    const rowColumnPair = region.split('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === 'player1'){
      span.innerText = 'X'
      vBoard[row][column] = 'X'
    } else{
      span.innerText = 'O'
      vBoard[row][column] = 'O'
    }
    console.clear()
    console.table(vBoard)
    disableRegion(span)
    const winRegions = getWinRegions
  }

document.getElementById('startButton').addEventListener('click', initializeGame)