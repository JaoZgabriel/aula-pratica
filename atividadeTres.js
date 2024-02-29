var teclado = require('prompt-sync')();
var celsius = parseFloat(teclado("digite um numero "));
var fahrenheit = (celsius * 9 / 5) + 32;
console.log("convertendo da Fahrenheit ".concat(fahrenheit));
