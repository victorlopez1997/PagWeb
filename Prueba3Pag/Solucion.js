var contador=4; var rta_correcta=8;    var intentos=0; var valor;

//contar los intentos
function contar() {
    contador-=1;
    document.getElementById("intentos").innerHTML = ("Te quedan " + contador + " intentos");
    if (contador==0 && contador== rta_correcta) {
        document.getElementById("resultado").innerHTML = ("Te quedaste sin intentos");
    }
}

//obtiene el valor del texto
function obtener_valor(){
    valor = document.getElementById("texto1").value;

    //rta correcta
    if (valor == rta_correcta) {   
        document.getElementById("resultado").innerHTML= ("GANASTE");
        document.getElementById("btn_enviar").disabled = true;
        document.getElementById("btn_enviar").style.backgroundColor = ("red");
        document.getElementById("btn_enviar").style.borderColor = ("red")
    }
    
    //intento n2 VALIDO
    if (contador==3 && valor != rta_correcta) { 
        document.getElementById("pista1").innerHTML=("Puede contener entre 5 y 10 unidades de almacenamiento.");
    }
    //intento n3 VALIDO
    if (contador==2 && valor != rta_correcta) {
        document.getElementById("pista2").innerHTML = ("Puede contener entre 7 y 9 unidades de almacenamiento.");
    }
    //intento n4
    if(contador == 1 && valor != rta_correcta){
        document.getElementById("resultado").innerHTML = ("PERDISTEEE");
        document.getElementById("btn_enviar").disabled = true;
    }
}

function reset() {
    location.reload(true);
}