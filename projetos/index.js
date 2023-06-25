const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const result = document.getElementById('result')

const alloedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

input.addEventListener('keydown', function (ev){
    ev.preventDefault()
    if (alloedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
})