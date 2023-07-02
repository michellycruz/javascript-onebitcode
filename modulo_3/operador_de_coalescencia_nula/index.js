const a = 0 // falso / sem conteúdo, se trocar para qualquer outro número torna-se verdadeiro
const b = null // falso / sem conteúdo, nulo
const c = "Teste" // verdadeiro / é uma string "contém" um conteúdo

console.log(a || b || c) // o operador lógico || (ou) executará o primeiro valor verdadeiro que encontrar

console.log(b ?? a) // retorna o operando do lado direito quando o seu operador do lado esquerdo é null ou undefined