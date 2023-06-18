/*
Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível: 
  - Escalar um jogador     
  - Informar a posição do jogador a ser escalado para o time.     
  - Informar o nome do jogador.     
  - Informar o número da camisa.     
  - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.     
  - Após o jogador ser escalado os campos de texto devem ser limpos. 
  - Remover um jogador     
  - Informar o número da camisa do jogador.     
  - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.     - Após o jogador ser removido o campo de texto deve ser limpo. Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
 */

function addPlayer(){
  const nome = document.getElementById('nome').value
  const posicao = document.getElementById('posicao').value
  const numeroCamisa = document.getElementById('numeroCamisa').value

  const confirmation = confirm("Escalar " + nome + " como " + posicao + "?")

  if(confirmation){
    const teamList = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + numeroCamisa
    playerItem.innerText = posicao + ": " + nome + " (" + numeroCamisa + ")"
    teamList.appendChild(playerItem)

    document.getElementById('posicao').value = ''
    document.getElementById('nome').value = ''
    document.getElementById('numeroCamisa').value = ''
  }
}

function removePlayer(){
  const numeroCamisa = document.getElementById('removerJogador').value
  const playerToRemove = document.getElementById('player-' + numeroCamisa)

  const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

  if (confirmation){
    playerToRemove.remove()
    document.getElementById('removerJogador').value = ''
  }
}