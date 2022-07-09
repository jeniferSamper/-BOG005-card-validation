import validator,{algoritmo } from './validator.js';

console.log(validator);

var boton = document.getElementById('guardar')
var tarjeta = document.getElementById('tc')


boton.onclick = function guardar(){
    tarjeta = tarjeta.value;
    
    alert('el numero es' + tarjeta);
    algoritmo();
}