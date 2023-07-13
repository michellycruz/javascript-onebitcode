"use strict";

///////////MÉDIA ARITMÉTICA SIMPLES

var media = function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia aritm\xE9tica simples: ".concat((5, 4, 6, 8)));

//////////MÉDIA PONDERADA

var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));

/////////////////MEDIANA

var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return media(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));

////////////////////MODA

var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));