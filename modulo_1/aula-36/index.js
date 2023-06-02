const arr = [
    "1º Nível",
    ["2º Nível", 42, true],
    [
        ["3º Nível, 1º item", "Olá mundo"],
        ["3º Nível, 2º item", "oi mundo"],
    ],
    []
]

//acessando arrays bidimencionais 

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])

//terceiro nivel
console.log(arr[2])
console.log(arr[2][1])
console.log(arr[2][1][0])