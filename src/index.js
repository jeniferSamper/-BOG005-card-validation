import validator from './validator.js';

//console.log(validator);

var boton = document.getElementById('guardar');
var creditCardNumber = document.getElementById('tc');
var nombreTitular = document.getElementById('nombretitular');
var cvv = document.getElementById('cvv');
var fechav = document.getElementById('fechav');
var vacio = document.getElementById('vacio');


boton.onclick = function guardar(){
    //creditCardNumber = creditCardNumber.value;
    //console.log('el numero de TC es ' + creditCardNumber);
    
    if (nombreTitular.value == null || nombreTitular.value == ''){
        vacio.innerHTML = ('Ingresa nombre de titular');
    } else if(creditCardNumber.value == null || creditCardNumber.value == ''){
        vacio.innerHTML = ('Ingresa un número de tarjeta');
    } else if (cvv.value == null || cvv.value == ''){
        vacio.innerHTML =('Ingresa codigo CVV');
    } else if (fechav.value == null || fechav.value == ''){
        vacio.innerHTML =('Ingresa fecha de vencimiento');
    } else{
        creditCardNumber = creditCardNumber.value;
        vacio.innerHTML = ('')
        validator.isValid(creditCardNumber);
        validator.maskify(creditCardNumber);

    }
}

    