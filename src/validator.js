const validator = {
  // ...
  isValid: function creditCardNumber (creditCardNumber){
    var casillas = new Array();
    var suma = 0;
    console.log('tipo de dato ingresado',typeof creditCardNumber)

    //guarda el numero en un array y lo invierte.
    for (var i = 0; i<creditCardNumber.length; i = i+1 ){
    casillas[i] = creditCardNumber.charAt(i);
    }
    console.log('casillas', casillas)
    casillas.reverse();
    console.log('inverto ', casillas);
    
    //se multiplica por dos los pares y suma los dos digitos si el numero es mayor a 9.
    for(var i= 1; i< casillas.length ; i +=2){
      if(casillas[i]<5){
      casillas[i] = casillas[i] * 2;
      }
      else{
        casillas[i]= ((casillas[i] - 5)* 2) + 1;
      }
      }
      console.log('array despues de multiplicar',casillas);
      for(var i= 0; i< casillas.length; i++){
        suma += Number(casillas[i])
      }
      console.log('suma', suma)
    }
  };

export default validator;
