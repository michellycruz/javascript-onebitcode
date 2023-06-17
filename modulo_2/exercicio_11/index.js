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
  console.log(nome, posicao, numeroCamisa)

  const ul = document.getElementById('teamList')

  const jogador = document.createElement('h3')
  jogador.className = 'list-item'
  jogador.innerText = 'Jogador'
  const newLiNome = document.createElement('li')
  newLiNome.className = 'list-item'
  newLiNome.innerText = 'Nome: ' + nome
  const newLiPosicao = document.createElement('li')
  newLiPosicao.className = 'list-item'
  newLiPosicao.innerText = 'Posicao: ' + posicao
  const newLiNumero = document.createElement('li')
  newLiNumero.className = 'list-item'
  newLiNumero.innerText = 'Numero: ' + numeroCamisa

  ul.appendChild(newLiNome)
  ul.appendChild(newLiPosicao)
  ul.appendChild(newLiNumero)
  jogador.appendChild(ul)
}