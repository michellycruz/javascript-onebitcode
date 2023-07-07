export default function (ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)  //copiar para a área de transferência
    } else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}



