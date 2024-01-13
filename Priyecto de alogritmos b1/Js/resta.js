var num1, num2, respuesta;
txt_resta = document.getElementById("resta");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar() {
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    // Genera la resta - Números aleatorios entre 0 y 9
    num1 = Math.round(Math.random() * 9);
    num2 = Math.round(Math.random() * num1); // Ensure num2 is less than or equal to num1 for positive results
    respuesta = num1 - num2;

    // Asigna los números para que se muestren
    resta.innerHTML = num1 + " - " + num2 + " = ";

    // Genera un número entre 0 y 2 para colocar la opción correcta
    indiceOpCorrecta = Math.round(Math.random() * 2);

    // Configura las opciones de respuesta
    if (indiceOpCorrecta == 0) {
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceOpCorrecta == 1) {
        op1.innerHTML = respuesta - 1;
        op2.innerHTML = respuesta;
        op3.innerHTML = respuesta + 1;
    }
    if (indiceOpCorrecta == 2) {
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 1;
        op3.innerHTML = respuesta;
    }
}

function controlarRespuesta(opcionElegida) {
    txt_resultado.innerHTML = opcionElegida.innerHTML;
    if (respuesta == opcionElegida.innerHTML) {
        txt_msj.innerHTML = "¡EXCELENTE!";
        txt_msj.style.color = "green";
        setTimeout(comenzar, 2000);
    } else {
        txt_msj.innerHTML = "¡INTENTA DE NUEVO!";
        txt_msj.style.color = "red";
        setTimeout(limpiar, 2000);
    }
}

function limpiar() {
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
}

comenzar();