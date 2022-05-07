
function comenzar(){
    var boton=document.getElementById("grabar");

    boton.addEventListener("click", itemNuevo, false);

}

function itemNuevo(){
    var clave=document.getElementById("clave").value;
    var valor=document.getElementById("valor").value;

    sessionStorage.setItem(clave, valor);

    //sessionStorage[clave]=valor; //lo mismo que la de arriba

    leer_mostrar(clave);

    var clave=document.getElementById("clave").value="";
    var valor=document.getElementById("valor").value="";
}

function leer_mostrar(clave){
    var zonadatos=document.getElementById("zonadatos");

    var elvalor=sessionStorage.getItem(clave);

    //var elvalor=sessionStorage[clave]; //lo mismo que la de arriba

    zonadatos.innerHTML="";

    for(i=0; i<sessionStorage.length; i++){

        var clave=sessionStorage.key(i);
        var elvalor=sessionStorage.getItem(clave);

        zonadatos.innerHTML+="<div>Clave: " + clave + " -- " + "Valor: " + elvalor + "</div>";
    }

    

}


window.addEventListener("load", comenzar, false);
