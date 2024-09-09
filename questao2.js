function fibonacci (){
    let A = 1;
    let B = 0;
    let C = 0;
    const verifica = 1.5; // inserir o valor para ser descoberto nesta variavel
    
    for (A = 1 ; A != 0; A = A + C){
      C = B;
      B = A;

      if (verifica == (A || B || C)) {
        return console.log('Este valor pertence à sequência');
      }
      
      else {
      return console.log('Este valor não pertence à sequência');
      }

     
    }

    }

fibonacci();