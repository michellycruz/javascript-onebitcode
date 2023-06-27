// Variáveis globais
let turnPlayer = '';
let btnRef;
let restartBtn = document.getElementById('resetButton');
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6]
];
let xTurn = true;
let count = 0;

// Função para atualizar o título com o nome do jogador
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById('turnPlayer').innerText = playerInput.value;
}

// Oculta a seção de jogo
function hideGameSection() {
  const gameSection = document.getElementById('gameSection');
  gameSection.style.display = 'none';
}

hideGameSection();

// Event listener para o botão de começar o jogo
document.getElementById('startButton').addEventListener('click', function(ev) {
  ev.preventDefault();
  start();
});

// Função de inicialização do jogo
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

  addPlayers(player1, player2);

  btnRef = document.querySelectorAll('.button-option');
  btnRef.forEach((element) => {
    element.addEventListener('click', (event) => {
      if (xTurn) {
        element.innerText = 'X';
        element.disabled = true;
        xTurn = false;
      } else {
        element.innerText = 'O';
        element.disabled = true;
        xTurn = true;
      }
      count += 1;
      if (count === 9) {
        drawFunction();
      }
      winChecker();
    });
    element.classList.add('button-option'); // Adiciona a classe '.button-option' aos botões
  });

  enableButtons();
}

// Função para desabilitar os botões
const disableButtons = () => {
  btnRef.forEach((element) => {
    element.disabled = true;
  });
};

// Função para habilitar os botões
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = '';
    element.disabled = false;
  });
};

// Event listener para o botão de recomeçar o jogo
restartBtn.addEventListener('click', () => {
  count = 0;
  enableButtons();
});

// Função para verificar se há um vencedor
function winChecker() {
  for (let i = 0; i < winningPattern.length; i++) {
    const [a, b, c] = winningPattern[i];
    if (
      btnRef[a].innerText !== '' &&
      btnRef[a].innerText === btnRef[b].innerText &&
      btnRef[a].innerText === btnRef[c].innerText
    ) {
      const winner = xTurn ? document.getElementById('player1').value : document.getElementById('player2').value;
      disableButtons();
      alert(`O jogador ${winner} venceu!`);
      return;
    }
  }
}

// Função para
