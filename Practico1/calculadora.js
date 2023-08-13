function calculadora() {

    var input1 = parseFloat (document.getElementById('numero1').value); //definicion de variables
    var input2 = parseFloat (document.getElementById('numero2').value);
    var select =document.getElementById ('select').value;
    var p = document.getElementById('resultado');


    if ( document.getElementById('numero1').value== ''|| document.getElementById('numero2').value == '') {
        p.innerHTML= '¡ATENCION! Ingrese un numero!!!'; 
        return // LLamada de atencion al dejar cualquiera de los campos vacios. Quise que el error aparezca en la zona del resultado y no como mensaje de alerta.
    }    

    if (select == '/' && input2 =='0') { 
        p.innerHTML = 'ERROR!! Operacion No Valida. Seleccione otro Divisor'; 
    return 
    }   // Mensaje de Error al Dividir por 0


    if (select === '+') {
        p.innerHTML = input1 + input2; 
        return //Operacion de Suma
    }

   if(select === '-') {
    p.innerHTML = input1 - input2 //Operacion de Resta
    
    }  

   if(select === '*') {
    p.innerHTML = input1 * input2 //Operacion de Multiplicacion
    
    }

   if(select === '/') {   
     p.innerHTML = input1 /  input2 //Operacion de Division
     
    } 

    //  if ( document.getElementById('resultado') > "9e30" || document.getElementById('resultado') < "-9e30") {
    //     document.getElementById('resultado').innerHTML = "El resultado tiene demasiados o pocos caracteres"; //Alerta cuando el resultado tiene demasiados o pocos caracteres.. no me funciona..

    //  }

   }

    function limpiarCampos() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').textContent = 'Resultado = ';
    }    // Boton de borrado
