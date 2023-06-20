/*
Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 
- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia. - Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:     
- um campo de texto para o nome da tecnologia     
- um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)     
- um botão de remover que deve excluir essa linha.     
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log() 

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.
*/
 
function newTechnology(){
        const form = document.getElementById('form')

        //criação dos elementos
        const technologyContainer = document.createElement('div');
        const technologyLabel = document.createElement('label')
        const technologyInput = document.createElement('input')
        const experienceLabel = document.createElement('label')
        const experienceGroup = document.createElement('div')

        //definição dos atributos e conteúdos dos elementos
        technologyLabel.innerText = 'Tecnologia: '
        technologyInput.type = 'text'
        technologyLabel.name = 'technology'

        experienceLabel.innerText = 'Tempo de Experiência: '

        const experienceOptions = ['0-2 anos', '3-4 anos', '+5 anos']
        experienceOptions.forEach(function(option){
            const optionLabel = document.createElement('label')
            const optionInput = document.createElement('input')
            optionLabel.innerText = option
            optionInput.type = 'radio'
            optionInput.name = 'experience'
            optionInput.value = option

            //input de tempo de experiencia na div de opção
            experienceGroup.appendChild(optionInput)
            experienceGroup.append(optionLabel)
        })

        const removeButton = document.createElement('button')
        removeButton.innerText = 'Remover'
        removeButton.addEventListener('click', function(){
                    //remove a linha de tecnologia
                    form.removeChild(technologyContainer)
                })

        //Adiciona os elementos à nova linha de tecnologia
        technologyContainer.appendChild(technologyLabel)
        technologyContainer.appendChild(technologyInput)
        technologyContainer.appendChild(experienceLabel)
        technologyContainer.appendChild(experienceGroup)
        technologyContainer.appendChild(removeButton)
        }

        //Adiciona a nova linha de tecnologia ao formulário
        form.appendChild(technologyContainer)
