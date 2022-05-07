function comenzar(){
    var boton=document.getElementById("grabar");
    boton.addEventListener("click" , itemNuevo , false);

}

function itemNuevo(){
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;
    sessionStorage.setItem(clave,valor);
    leer_mostrar(clave);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";


}
function leer_mostrar(clave){
    var zonadatos=document.getElementById("zonadatos");//estudiar
    zonadatos.innerHTML='<div><button onlick="eliminarTodo()">Eliminar todo</button></div>';
    //var elvalor=sessionStorage.getItem;//estudiar
    //zonadatos.innerHTML="<div>Clave: " + clave + "--" + "Valor: " + elvalor + "</div>"
    //zonadatos.innerHTML="";
    for(i=0;i<sessionStorage.length;i++){
        var clave=sessionStorage.key(i);
        var elvalor=sessionStorage.getItem(clave);
        zonadatos.innerHTML+='<div>Clave: ' + clave + '--' + 'Valor: ' + elvalor + '</br><button onclick="eliminarItem(\'' + clave + '\')">Eliminar Item</button><div>';

}

}
function eliminarTodo(){
    if(confirm("¿Seguro?")){
        sessionStorage.clear();
        leer_mostrar();
    }
}
function eliminarItem(cl){
    if(confirm("¿Seguro?")){
        sessionStorage.removeItem(cl);
        leer_mostrar();
    }
}

window.addEventListener("load" , comenzar , false)