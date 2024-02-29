const teclado = require (`prompt-sync`)
let x: number = 1;
let contaAte: number = teclado(parseFloat(`Digite o valor do contador`))

 while(x !=11){
   
    console.log(`Contador está em ${x}`);

 x++;
 }