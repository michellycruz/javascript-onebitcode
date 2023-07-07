import {calculate} from './calculate.js'
import {themeSwitcher} from './themeSwitcher.js'
import {copyToClipboard} from './copyToClipboard.js'

document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

const input = document.getElementById('input')


const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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
    if (allowedKeys.includes(ev.key)){
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