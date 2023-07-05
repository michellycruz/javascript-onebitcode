const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns) //saída comum, " [ 'Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc' ] "
console.log(...towns) // espaçamento entre os elementos " Prontera Izlude Payon Alberta Geffen Morroc "
console.log(...towns[0]) // separa os elementos do array de posição 0 " P r o n t e r a "

const townsCopy = towns //é uma referência ao array antigo, logo, cada alteração executada em townsCopy será aplicada à variável matriz "towns"

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})

const townsClone = [...towns] //não é uma referência ao array antigo, cria-se um novo array

townsClone.push('Aldebaran') 

console.log({towns, townsCopy, townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = 'Test'

console.log({townsObj, townsObjClone})