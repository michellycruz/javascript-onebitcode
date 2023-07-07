export default function (){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    
    const result = eval(input.value) //eval = avaliar //cuidado ao usar o eval
    
    resultInput.value = result
    resultInput.classList.remove('error')
}

const resultInput = document.getElementById('result')
