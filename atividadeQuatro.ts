const teclado=  require('prompt-sync')();

let fahrenheit: number = parseFloat(teclado(`digite um numero: `));

let celsius: number = (5/9) * ( fahrenheit - 32)

console.log(`convertendo da ${celsius} Celsius`)