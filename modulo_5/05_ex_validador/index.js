function validateEmail(email){
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){ //// Verifica se o email possui 2 caracteres alfanuméricos antes do @, pelo menos 2 letras após o @ e pelo menos 2 letras após o ponto do domínio
        const err = new Error('Email inválido') //cria um novo objeto "Error"
        err.input = 'email' //adiciona a propriedade input ao objeto de erro e atribui o valor 'email'
        throw err // lança o objeto "Error" e interrompe a execução do programa
    }
}

function validatePassword(password){
    if (
        password.length < 8 || 
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/\d/) ||
        !password.match(/[^a-zA-Z0-9\s]/)//match de caracteres especiais
    ) {
        const err = new Error('Senha inválida')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles(inputs){
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault() //pra não atualizar a página
    resetFormStyles(userInputs)
    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})