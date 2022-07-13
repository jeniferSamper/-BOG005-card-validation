const validator = {
  // ...
  isValid: function (creditCardNumber){
    var casillas = new Array();
    var suma = 0;
    var total;
    var valido;
    
    //guarda el numero en un array y lo invierte.
    casillas = creditCardNumber.split("");
    casillas.reverse();
  
    //se multiplica por dos los pares y suma los dos digitos si el numero es mayor a 9.
    for(var i = 1; i< casillas.length ; i +=2){
      if(casillas[i]<5){
      casillas[i] = casillas[i] * 2;
      }
      else{
        casillas[i]= ((casillas[i] - 5)* 2) + 1;
      }}
    //suma todos los valores dentro del array.
      casillas.forEach(function(a){suma+=Number(a)})
      
      //calculamos si es valido o no y retorna un booleano.
      total = suma % 10;
      valido = total == 0;
      return valido;
    },

    maskify: function (creditCardNumber){
    var simbolo = '#'; 
    var mascara = (creditCardNumber.slice(0, -4).replace(/./g, simbolo) + (''+ creditCardNumber.slice(-4)));
    return mascara;
  }
  };

export default validator;
