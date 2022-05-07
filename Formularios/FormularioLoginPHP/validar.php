<?php
$usuario=$_POST["usuario"];
$clave=$_POST["clave"];

echo $usuario.$clave;

//conectar a base de datos
/*

$conexion = mysqli_connect("localhost", "root", "", "BDD_USUARIOS_IVANG");
$consulta = "SELECT * FROM T_USUARIOS WHERE NICK_USUARIO = '$usuario' and CONTRASENYA = '$clave'";
$resultado = mysqli_query($conexion, $consulta);
$filas = mysqli_num_rows($resultado);

if ($filas > 0) {
    header("location:Bienvenidos.html");
}

else {
    echo "Error de autenticacion";
}

mysqli_free_result($resultado);
mysqli_close($conexion);*/

?>
