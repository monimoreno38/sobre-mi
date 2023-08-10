function calculadora() {

    var input1 = document.getElementById('numero1').value; //definicion de variables
    var input2 = document.getElementById('numero2').value;
    var select = document.getElementById('select').value;
    var p = document.getElementById('resultado');


    if (input1 == '' || input2 == '') {
        p.innerHTML = '¡ATENCION! Ingrese un numero!!! '; // LLamada de atencion al dejar cualquiera de los campos vacios
        return
    }    

    if (select ==='/' && input2 =='0') { 
        p.innerHTML = 'ERROR!! Operacion No Valida. Seleccione otro Divisor'; 
    return 
    }   // Mensaje de Error al Dividir por 0

   
    if (select === '+') {
        p.innerHTML = parseInt(input1) + parseInt(input2); return //Operacion de Suma
    }

   if(select === '-') {
    p.innerHTML = parseInt(input1) - parseInt(input2) //Operacion de Resta
   }

   if(select === '*') {
    p.innerHTML = parseInt(input1) * parseInt(input2) //Operacion de Multiplicacion
   }

   if(select === '/') {   
     p.innerHTML = parseInt(input1) / parseInt(input2) //Operacion de Division
    } 

}

function limpiarCampos() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').textContent = 'Resultado = ';
}    // Boton de borrado

