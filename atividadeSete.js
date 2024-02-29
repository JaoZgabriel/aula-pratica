var teclado = require("prompt-sync");
var x = 1;
var contaAte = teclado(parseFloat("Digite o valor do contador"));
while (x != 11) {
    console.log("Contador est\u00E1 em ".concat(x));
    x++;
}
