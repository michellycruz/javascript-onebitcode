export default function calculate(){
    const resultInput = document.querySelector('#result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value) //eval = avaliar //cuidado ao usar o eval
    resultInput.value = result
    resultInput.classList.remove('error')
}