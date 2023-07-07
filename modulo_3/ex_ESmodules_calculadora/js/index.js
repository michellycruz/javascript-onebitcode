import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard"
import { hadleClearButton, handleButtonPress } from "./keyHandles.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', hadleClearButton)

input.addEventListener('keydown', )

document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)