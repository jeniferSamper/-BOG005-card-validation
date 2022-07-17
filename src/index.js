import validator from './validator.js';

//console.log(validator);

//esta funcion muestra las opciones a elegir.
 function mostrarOpciones (){
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
document.getElementById('opc').addEventListener('click', mostrarOpciones);

//esta función regresa a la pantalla principal
function regresarP1 (){
    document.getElementById('pantalla1').style.display = 'block';
    document.getElementById('pantalla2opc1').style.display = 'none';
    document.getElementById('pantalla2opc2').style.display = 'none';
    document.getElementById('pantalla2').style.display= 'none';
    document.getElementById('pantalla3').style.display= 'none';
    document.getElementById('pantallaFinal').style.display = 'none';

}
document.getElementById('regresar').addEventListener('click', regresarP1);

//esta funcion te lleva a reservar y validar la tarjeta
function irReservar(){
    document.getElementById('pantalla2opc1').style.display = 'none';
    document.getElementById('pantalla2opc2').style.display = 'none';
    document.getElementById('pantalla2').style.display= 'none';
    document.getElementById('pantalla3').style.display = 'block';
    document.getElementById('pantallaFinal').style.display = 'none';
}
document.getElementById('reservar').addEventListener('click', irReservar);

// esta funcion valida y enmascara la tarjeta
function guardar1(){
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
        document.getElementById('pantalla3').style.display = 'none';
        creditCardNumber = creditCardNumber.value;
        mensaje.innerHTML = ('')
        validator.isValid(creditCardNumber);
        resultado2 = validator.maskify(creditCardNumber);
        if(validator.isValid(creditCardNumber) == true){
            resultado1 = 'valida'
        } else {
            resultado1 = 'invalida'
        }
        document.getElementById('pantallaFinal').style.display='block'
        mensaje2.innerHTML =(' Su tarjeta ' + resultado2 + ' es ' + resultado1);
        
        
    }
    return false;
    
} 
document.getElementById('guardar').addEventListener('click', guardar1);  
document.getElementById('regresar2').addEventListener('click', regresarP1)