function mediaFaturamento(){
const data = require('./dados.json');
let total = 0;
let diasFaturamento = 0;
let media = 0;

for(dia=0; dia<data.length; dia++){
    
   
   if(data[dia].valor>0){
    diasFaturamento++;

   }
    total = Number(data[dia].valor) + total;
    

}
media = total / diasFaturamento;
  console.log(media);
}
faturamento();

function minimo(){
    const data = require('./dados.json');
    let menorValor = data[0].valor;
    for (dia=0; dia<data.length; dia++){
        if(data[dia].valor<menorValor){
            menorValor = data[dia].valor;
        }
    
    }
console.log(menorValor);
}
minimo();

function maximo(){
    const data = require('./dados.json');
    let menorValor = data[0].valor;
    for (dia=0; dia<data.length; dia++){
        if(data[dia].valor>menorValor){
            menorValor = data[dia].valor;
        }
    
    }
console.log(menorValor);
}
maximo();