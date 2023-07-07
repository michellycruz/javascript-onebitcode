export default function calculate (){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    
    const result = eval(input.value) //eval = avaliar //cuidado ao usar o eval
    
    resultInput.value = result
    resultInput.classList.remove('error')
}


export const resultInput = document.getElementById('result')
document.getElementById('equal').addEventListener('click', calculate)