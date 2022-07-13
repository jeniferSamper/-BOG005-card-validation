import validator from './validator.js';

//console.log(validator);

var boton = document.getElementById('guardar');
var creditCardNumber = document.getElementById('tc');
var nombreTitular = document.getElementById('nombretitular');
var cvv = document.getElementById('cvv');
var fechav = document.getElementById('fechav');
var mensaje = document.getElementById('mensaje');
var resultado1;
var resultado2;

boton.onclick = function guardar(){
    //creditCardNumber = creditCardNumber.value;
    //console.log('el numero de TC es ' + creditCardNumber);
    
    if (nombreTitular.value == null || nombreTitular.value == ''){
        mensaje.innerHTML = ('Ingresa nombre de titular');
    } else if(creditCardNumber.value == null || creditCardNumber.value == ''){
        mensaje.innerHTML = ('Ingresa un número de tarjeta');
    } else if (cvv.value == null || cvv.value == ''){
        mensaje.innerHTML =('Ingresa codigo CVV');
    } else if (fechav.value == null || fechav.value == ''){
        mensaje.innerHTML =('Ingresa fecha de vencimiento');
    } else{
        creditCardNumber = creditCardNumber.value;
        mensaje.innerHTML = ('')
        validator.isValid(creditCardNumber);
        resultado2 = validator.maskify(creditCardNumber);
        if(validator.isValid(creditCardNumber) == true){
            resultado1 = 'valida'
        } else {
            resultado1 = 'invalida'
        }
        mensaje.innerHTML =(' Su tarjeta ' + resultado2 + ' es ' + resultado1);
        
        


        
    }
    return false;
}

    