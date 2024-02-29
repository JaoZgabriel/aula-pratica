const teclado=  require('prompt-sync')();

let celsius: number = parseFloat(teclado(`digite um numero `));

let fahrenheit: number = (celsius * 9/5) + 32

console.log(`convertendo da Fahrenheit ${fahrenheit}`)