const validator = {
  // ...
  isValid: function (creditCardNumber){
    var casillas = new Array();
    var suma = 0;
    var total;
    var valido;
    //guarda el numero en un array y lo invierte.
    //console.log(typeof creditCardNumber)
    casillas = creditCardNumber.split("");
    //console.log('casillas', casillas)
    casillas.reverse();
    //console.log('inverto ', casillas);
    
    //se multiplica por dos los pares y suma los dos digitos si el numero es mayor a 9.
    for(var i = 1; i< casillas.length ; i +=2){
      if(casillas[i]<5){
      casillas[i] = casillas[i] * 2;
      }
      else{
        casillas[i]= ((casillas[i] - 5)* 2) + 1;
      }
      }
      //console.log('array despues de multiplicar',casillas);
      for(var j = 0; j< casillas.length; j++){
      suma += Number(casillas[j]);
      }
      //console.log('suma', suma)
      
      // calculamos si es valido o no
      total = suma % 10;
     //console.log('si es cero es valido: ', total)
      valido = total == 0;
     //console.log(' la TC es validA?', valido)
     return valido;
    },

  maskify: function (creditCardNumber){
    var simbolo = '#'; 
    var mascara = (creditCardNumber.slice(0, -4).replace(/./g, simbolo) + (''+ creditCardNumber.slice(-4)));
    //console.log('dato mascara', mascara);
    return mascara;
  }
  };

export default validator;
