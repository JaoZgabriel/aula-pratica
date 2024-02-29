var teclado = require('prompt-sync')();
var fahrenheit = parseFloat(teclado("digite um numero: "));
var celsius = (5 / 9) * (fahrenheit - 32);
console.log("convertendo da ".concat(celsius, " Celsius"));
