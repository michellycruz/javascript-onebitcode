function dobro(x) {
    alert("O sobro de " + x + " é " + (x * 2))
}

//dobro(5)
//dobro(10)

function dizerOla(nome = "mundo"){
    alert("Olá " + nome + "!")
}

//dizerOla("michelly")
//dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

// soma(5, 5)

function criarUsuario(nome, email, senha, tipo = "admin"){ //parâmetros que tem o valor padrão devem ser exibidos por último, "tipo = "admin" é um valor padrão
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

//criarUsuario("Michelly", "mich@gmail.com", "123456", )

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    //...
}

function objetoComoParametro(usuario){

}

const dadosDoUsuario = {
    nome:"",
    telefone:"",
    email:"",
    senha:"",
    endereco:"",
    aniversario:""
}

objetoComoParametro(dadosDoUsuario)





