import validator from './validator.js';

//console.log(validator);

var boton = document.getElementById('guardar');
var creditCardNumber = document.getElementById('tc');
var nombreTitular = document.getElementById('nombretitular');
var cvv = document.getElementById('cvv');
var fechav = document.getElementById('fechav');
var vacio = document.getElementById('vacio');
var resultado1;
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
        var resultado2 = validator.maskify(creditCardNumber);
        if(validator.isValid(creditCardNumber) == true){
            resultado1 = 'valida'
        } else {
            resultado1 = 'invalida'
        }
        vacio.innerHTML =(' Su tarjeta ' + resultado2 + ' es ' + resultado1);
        
        


        
    }
    return false;
}

    