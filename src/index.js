import validator from './validator.js';

//console.log(validator);

var boton = document.getElementById('guardar');
var creditCardNumber = document.getElementById('tc');


boton.onclick = function guardar(){
    creditCardNumber = creditCardNumber.value;
    //console.log('el numero de TC es ' + creditCardNumber);
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);}
    