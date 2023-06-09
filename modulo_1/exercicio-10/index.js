const vagas = []


function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe o nome da vaga:")
    const descricao = prompt("Informe a descricao da vaga:")
    const dataLimite = prompt("Informe a data limite da vaga / (dd/mm/aaaa):")

    const confirmacao = confirm(
        "Deseja salvar essa vaga com as seguintes informações?" +
        "\nNome: " + nome +
        "\nDescrição: " + descricao +
        "\nData limite: " + dataLimite
    )

    if (confirmacao){
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vagas.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?" +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}


function excluirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?" +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao){
        
    }
}
