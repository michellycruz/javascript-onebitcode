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
      element.classList.add('cursor-pointer')
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
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
  }

  function handleWin(regions){
    regions.forEach(function(region){
      document.querySelector('[data-region="'+ region +'"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + ' venceu!'
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
    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
      handleWin(winRegions)
      console.log('VENCEU')
    } else if (vBoard.flat().includes('')){
      turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
      updateTitle()
    } else{
      document.querySelector('h2').innerHTML = 'Empate!'
    }
  }

document.getElementById('startButton').addEventListener('click', initializeGame)
document.getElementById('resetButton').addEventListener('click', initializeGame)