function calculadora() {

    var input1 = document.getElementById("numero1").value;
    var input2 = document.getElementById("numero2").value;
    var select = document.getElementById("select").value;
    var p = document.getElementById("resultado");
   
    if (input1 == '' || input2 == '') {
        p.innerHTML = '¡ATENCION! Ingrese un numero!!! ';
        return
    }
    if (select === '+') {
        p.innerHTML = parseInt(input1) + parseInt(input2)
    }

if(select === '-') {
    p.innerHTML = parseInt(input1) - parseInt(input2)
}

if(select === '/') {
    p.innerHTML = parseInt(input1) / parseInt(input2)
}

if(select === '*') {
    p.innerHTML = parseInt(input1) * parseInt(input2)
}
}
function limpiarCampos() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').textContent = 'Resultado: ';
}
