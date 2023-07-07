const input = document.querySelector("#input")

export function handleButtonPress(ev){
    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function hadleClearButton(){
    input.value = ''
    input.focus()
}

export function handleTyping(ev){
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
}