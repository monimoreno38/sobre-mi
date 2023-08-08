function calculadora() {

    var input1 = document.getElementById('numero1').value; //definicion de variables
    var input2 = document.getElementById('numero2').value;
    var select = document.getElementById('select').value;
    var p = document.getElementById('resultado');


    // const valorMax = 1e+10; 
    // const valorMin = -1e-10; 

    // if (p > valorMax || p < valorMin) {
    //     document.getElementById('resultado').innerHTML = 'ERROR!!! El resultado tiene demasiados caracteres.!!!';
    //   return;
    // }  // Mensaje de ERROR de resultados Maximos y Minimos... No esta funcionando...
 

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

 if ( p > 1e+10 || p < 1e-10 ) {
    document.getElementById('resultado').innerHTML = 'ERROR!!! El resultado tiene demasiados caracteres.';
     return //Mensaje de Error de limites MAX y MIN, no esta funcionando....
  }
   
}

function limpiarCampos() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').textContent = 'Resultado = ';
}    // Boton de borrado

