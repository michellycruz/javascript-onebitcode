const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = input.value = 'Olá, Mundo!'

    console.log(input.value)
    console.log(input.getAttribute('value'))
})