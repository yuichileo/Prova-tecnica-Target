function inverter(inv){

    valor='';

    for(i=((inv.length)-1); i>=0; i--){
      valor += inv[i];
      
    }
    return console.log(valor);
       }

     


inverter('abc'); // inserir a string a ser invertida