///////////MÉDIA ARITMÉTICA SIMPLES

let media = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};
console.log(`Média aritmética simples: ${(5, 4, 6, 8)}`);

//////////MÉDIA PONDERADA

const mediaPonderada = (...entries) => {
  const sum = entries.reduce((accum, {
    number,
    weight
  }) => accum + number * (weight ?? 1), 0);
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0);
  return sum / weightSum;
};
console.log(`Média Ponderada: ${mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})}`);

/////////////////MEDIANA

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return media(firstMedian, secondMedian);
};
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

////////////////////MODA

const mode = (...numbers) => {
  const quantities = numbers.map(num => [num, numbers.filter(n => num === n).length]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};
console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);


// npx babel index.js para corrigir um código usando o babel
// npx babel index.js --out-file dist.js para exportar o código corrigido pelo babel no terminal