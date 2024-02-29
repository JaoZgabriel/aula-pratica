var teclado = require("prompt-sync")();
var divisor = 2;
var dividendo = parseFloat(teclado("Digite o numero:"));
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("Numero digitado ".concat(dividendo, " \u00E9 par!"));
}
else if (resto == 1) {
    console.log("Numero digitado ".concat(dividendo, "\u00E9 impar!!"));
}
else {
    console.log("Algo deu errado!!");
}
