// npx são os executaveis
//é possível executar os comandos de uma biblioteca dentro dos scripts identificados no arquivo package.json
//criação de atalhos nos scripts

const helloWorldNpm = require('hello-world-npm')

console.log("Executando hello-world-npm: " + helloWorldNpm())