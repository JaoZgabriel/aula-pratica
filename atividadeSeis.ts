console.clear();

const teclado= require (`prompt-sync`)()

let idade:number = 0;
let salario:number = 0;
let totPessoasNaCondicao:number = 0;
let PessoasContabilizadas:number = 1;

while (PessoasContabilizadas<= 5){
idade = parseInt(teclado(`Digite a Idade do funcionario ${PessoasContabilizadas}:`));
salario = parseFloat(teclado(`Digite o salario do funcionario ${PessoasContabilizadas}:`));
console.log(``);

if(idade < 30 && salario > 3000){
    totPessoasNaCondicao++;
    PessoasContabilizadas++;
}
else {
  PessoasContabilizadas++; 
}

}
console.log(`O total de pessoas que atende a condição é ${totPessoasNaCondicao}`);
