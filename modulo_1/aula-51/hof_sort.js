const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"}
  ]
  
  // Utilizando o método sort para ordenar os personagens pelo nível (do maior para o menor)
  const personagensOrdenados = personagens.slice().sort(function(a, b) {
    return b.nivel - a.nivel;
  });
  
  console.log(personagens);
  console.log(personagensOrdenados);
  