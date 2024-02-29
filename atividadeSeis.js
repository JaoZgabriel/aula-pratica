console.clear();
var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var PessoasContabilizadas = 0;
while (PessoasContabilizadas <= 5) {
    idade = parseInt(teclado("Digite a Idade do funcionario ".concat(PessoasContabilizadas, ":")));
    salario = parseFloat(teclado("Digite o salario do funcionario ".concat(PessoasContabilizadas, ":")));
    console.log("");
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        PessoasContabilizadas++;
    }
    else {
        PessoasContabilizadas++;
    }
}
console.log("O total de pessoas que atende a condi\u00E7\u00E3o \u00E9 ".concat(totPessoasNaCondicao));
