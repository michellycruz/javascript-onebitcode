/* # [Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos: 
    
    - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair. 
    - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados. 
    - O menu deve ter a opção de salvar um imóvel. 
    - Para salvar um novo imóvel o programa deve pedir as seguintes informações:     
    - Nome do proprietário.     
    - Quantidade de quartos.     
    - Quantidade de banheiros.     
    - Se possui garagem. 
    - O menu também deve ter a opção de mostrar todos os imóveis salvos.](https://www.mindmeister.com/map/2783164284) */

    const imoveis=[]
    let opcao = ""

    do{
        opcao = prompt("Bem vindo ao cadastro de imóveis, o que deseja fazer?" + " Imóveis: " + imoveis.length + "\n\n1 - Salvar um imóvel" + "\n2 - Mostrar todos os imóveis salvos" + "\n3 - Sair")

        switch(opcao){
            case "1":
                const imovel = {}
                imovel.proprietario = prompt("Qual o nome do proprietário?")
                imovel.quartos = prompt("Qual a quantidade de quartos que o imóvel tem?")
                imovel.banheiros = prompt("Quantos banheiros?")
                imovel.garagem = prompt("Possui garagem? sim/não")

                const confirmacao = confirm(
                    "Deseja salvar esse imóvel?" +
                    "\nProprietário: " + imovel.proprietario +
                    "\nQuartos: " + imovel.quartos +
                    "\nBanheiros: " + imovel.banheiros +
                    "\nGaragem: " + imovel.garagem
                )
                if(confirmacao){
                    imoveis.push(imovel)
                } else{
                    alert("Voltando ao menu...")
                }

            break

            case "2": 
                for(let i = 0; i < imoveis.length; i++) {
                    alert(
                        "Imóvel: " + (i + 1) + 
                        "\nProprietário: " + imoveis[i].proprietario +
                        "\nQuartos: " + imoveis[i].quartos +
                        "\nBanheiros: " + imoveis[i].banheiros +
                        "\nGaragem: " + imoveis[i].garagem 
                    )
                }

            break

            case "3": 
                alert("Encerrando...")

            break

            default:
                alert("Comando inválido")
        }

    }while(opcao !== "3")

