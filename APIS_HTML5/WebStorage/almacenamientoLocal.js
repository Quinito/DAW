function comenzar(){
    var boton = document.getElementById("grabar");

    boton.addEventListener("click", itemNuevo, false);
}

function itemNuevo(){
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;

    localStorage.setItem(clave, valor);

    leer_mostrar(clave);

    var clave = document.getElementById("clave").value = "";
    var valor = document.getElementById("valor").value = "";
}

function leer_mostrar(clave){
    var zona_datos = document.getElementById("zona_datos");
    //var el_valor = localStorage.getItem(clave);

    zona_datos.innerHTML = '<button onclick = "eliminarTodo()">Eliminar todo</button>';
    
    for(i = 0; i < localStorage.length; i++ ){
        var clave = localStorage.key(i);

        var el_valor = localStorage.getItem(clave);
        
        zona_datos.innerHTML += '<div><button onclick = "eliminar(\'' + clave + '\')">Eliminar</button>Clave: ' + clave + '--' + 'Valor: ' + el_valor + '</div>';
    }

}

function eliminarTodo(){
    if(confirm( 'Estás seguro?')){
        localStorage.clear();

        leer_mostrar();
    }

}

function eliminar(clave){
    if(confirm('Estás seguro?')){
        localStorage.removeItem(clave);

        leer_mostrar();
    }
}

window.addEventListener("load", comenzar, false);