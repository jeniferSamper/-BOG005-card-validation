import validator,{algoritmo } from './validator.js';

console.log(validator);

var boton = document.getElementById('guardar')
var creditCardNumber = document.getElementById('tc')


boton.onclick = function guardar(){
    creditCardNumber = creditCardNumber.value;
    alert('el numero es' + creditCardNumber);
    algoritmo(creditCardNumber);
}