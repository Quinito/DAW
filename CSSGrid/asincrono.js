function cargar(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 & this.status == 200){
            document.getElementById ("datos").innerHTML=this.responseText;
        }
    }
    xhttp.open("GET", "datos.txt", false); //False sincrono TRUE asincrono
    xhttp.send();
} 
function mensaje(){
    alert('Mientras carga usuario');
}
let btnCarga=document.getElementById("cargar");
btnCarga.addEventListener("click",cargar);
btnCarga.addEventListener("click",mensaje);


