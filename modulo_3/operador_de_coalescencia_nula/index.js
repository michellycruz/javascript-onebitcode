const a = 0 // falso / sem conteúdo, se trocar para qualquer outro número torna-se verdadeiro
const b = null // falso / sem conteúdo, nulo
const c = "Teste" // verdadeiro / é uma string "contém" um conteúdo

console.log(a || b || c) // o operador lógico || (ou) executará o primeiro valor verdadeiro que encontrar
console.log(b ?? a) // retorna o operando do lado direito quando o seu operador do lado esquerdo é null ou undefined

/////////////////////////////////////////////////////////////////////

let d = 0
let e = d || 42 // com o OU o "e" vai retornar 42 

console.log({ d, e })

e = d ?? 42 // com o operador de coalescência o "e" vai retornar 0

console.log({ d, e })

let f = false ?? 42 // o operador ?? ignora somente o null e o undefined
console.log({f})