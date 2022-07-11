const validator = {
  // ...
};

export default validator;

//funcion guardar en array 
export function algoritmo (creditCardNumber){
  var casillas = new Array();
  for (var i= 0 ; i < creditCardNumber.length ; i = i+1 ){
  casillas[i] = creditCardNumber.charAt(i);
  }
  console.log('casillas', casillas)
  casillas.reverse();
  console.log('inverto ', casillas);
 alert('Invertido ' + casillas)
 alert('probando github escritotio')
}