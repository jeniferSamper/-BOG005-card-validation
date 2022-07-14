import validator from './validator.js';

//console.log(validator);
var opc=document.getElementById('opc');

//esta funcion muestra las opciones a elegir.
opc.onclick = function MostrarOpciones (){
    var opc1=document.getElementById('opc1');
    var opc2=document.getElementById('opc2');
    var selecciona=document.getElementById('selecciona');
    document.getElementById('pantalla1').style.display ='none';
    if (opc1.checked == true ){
        document.getElementById('pantalla2opc1').style.display = 'block';
        document.getElementById('pantalla2').style.display = 'block';
    } else if( opc2.checked == true){
        document.getElementById('pantalla2opc2').style.display = 'block';
        document.getElementById('pantalla2').style.display = 'block';
    } else {
        document.getElementById('pantalla1').style.display ='block';
        selecciona.innerHTML= ('Selecciona una opción');
    }
}

var boton = document.getElementById('guardar');
boton.onclick = function guardar(){
    var creditCardNumber = document.getElementById('tc');
    var nombreTitular = document.getElementById('nombretitular');
    var cvv = document.getElementById('cvv');
    var fechav = document.getElementById('fechav');
    var mensaje = document.getElementById('mensaje');
    var resultado1;
    var resultado2;
    
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

var regresar = document.getElementById('regresar');
regresar.onclick = function (){
    document.getElementById('pantalla1').style.display = 'block';
}

var reservar= document.getElementById('reservar');
reservar.onclick= function (){
    document.getElementById('pantalla2opc1').style.display = 'none';
    document.getElementById('pantalla2opc2').style.display = 'none';
    document.getElementById('pantalla2').style.display= 'none';
    document.getElementById('pantalla3').style.display = 'block';
}

    