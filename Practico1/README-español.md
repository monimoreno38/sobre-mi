# Título del Proyecto

El proyecto se basa en una Calculadora Simple con Boton desplegable, que permite realizar 4 operaciones basicas: Suma, Resta, Multiplicacion y Division.

## Comenzando 🚀

La calculadora esta compuesta por un archivo HTML, CSS y Js, adjuntos a la carpeta denominada Practico1


### Pre-requisitos 📋

No hay que instalar ningun Software, simplemente se deja correr a traves de la pagina web. 


## Ejecutando las pruebas ⚙️

Para llevar adelante las pruebas se ingresaron numeros en los campos vacios, seleccion desde el boton desplegable de la operacion requerida, y luego con solo un click en el boton "Resultado" Arroja el resultado esperado. Incluye un boton de Borrado y permite realizar operaciones con numeros decimales.
 Al ingresar un dividendo=0 Arroja el mensaje de error solicitado, al igual que cuando uno de los campos queda sin rellenar. No asi cuando un numero tiene demasiados o pocos resultados. Es un punto a revisar en el Codigo.
 Se solicitaba Mensaje de Error o Alerta, pero me gusto mas como quedaba el Mensaje "ERROR"

 Al llevar adelante el punto de Error/Alerta de un numero con demasiados carcteres se utilizaron los codigos:


       if ( p > 1e+10 || p < 1e-10 )  {

    document.getElementById('resultado').innerHTML = 'ERROR!!! El resultado tiene demasiados caracteres.';
     return  }

  se modificaron por:

       const valorMax = 1e+10; 
       const valorMin = -1e-10;
      if (p > valorMax || p < valorMin) {

    document.getElementById('resultado').innerHTML = 'ERROR!!! El resultado tiene demasiados caracteres.!!!';
       return;}


 Dejando un mensaje de ERROR "Comentado" que tampoco funciono:

      if ( document.getElementById('resultado') > 1e30 || document.getElementById('resultado') < -1e30) {
    p.innerHTML = "El resultado tiene demasiados caracteres"; }

    
Por otro lado, en el codigo anterior, habia aplicado PARSEINT en cada operacion, pero se solicitaba en el punto 5 que la calculadora realice operaciones con decimales (floats), debiendo modificar las variables por PARSEFLOAT, para que al analizar las cadenas me permita el valor decimal y no lo redondee al entero mas cercano...

## Construido con 🛠️

Para Realizar el proyecto se utilizo Visual Studio Code. Aplicando codigos en HTML, CSS y JavaScript.

Las fuentes que se utilizaron fueron: 

* w3schols para HTML: https://www.w3schools.com/html/
* para CSS: https://www.w3schools.com/css/css_padding.asp
* para Js: https://www.w3schools.com/js/js_arithmetic.asp
* Mozilla de expresiones regulares en Js: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
* Apuntes y clases de Argentina-Programa, llevado a cabo por FAMAF https://sites.google.com/unc.edu.ar/argentinaprograma/p%C3%A1ginas-web-con-componentes-din%C3%A1micos/te%C3%B3ricos?authuser=0
* Y algunas busquedas aisladas en Google.


## Autores ✒️

Monica Moreno - https://github.com/monimoreno38 


## Licencia 📄

Este proyecto no tiene Licencia.

## Expresiones de Gratitud 🎁
🤓❤️
* Gracias al Profe de Practicas Nehuen Rognone Aramburu por su tiempo, dedicacion y paciencia en cada clase...

 Y al profe de Teoricos Ignacio Moretti.


