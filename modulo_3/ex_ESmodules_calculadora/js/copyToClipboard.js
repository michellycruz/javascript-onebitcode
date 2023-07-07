export default function copyToClipboard(ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(document.querySelector('#result').value)  //copiar para a área de transferência
    } else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}