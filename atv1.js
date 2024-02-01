let prompt = require('prompt-sync')();

let valor;

valor = parseFloat(prompt("Digite o valor: "));

while(valor<=0){
    valor = parseInt(prompt("Valor inválido. Digite novamente: "));
}

for ( i = 0; i < 10; i++) {
    console.log(i + " x " + valor + " = " + valor*i);
}