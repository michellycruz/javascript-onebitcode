const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = input.value = 'Olá, Mundo!'

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'date' ? 'date' : 'text'
    // ? > if   : > else
    //input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})