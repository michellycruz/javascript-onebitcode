const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const result = document.getElementById('result')

const alloedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function (ev){
    ev.preventDefault()
    if (alloedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    const result = eval(input.value) //eval = avaliar //cuidado ao usar o eval
    resultInput.value = result
}