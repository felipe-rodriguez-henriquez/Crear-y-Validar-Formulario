function validar(){
    var nombre, apellidos, correo, usuario, pass, telefono;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    pass = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || pass === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length>80){
        alert("El apellido es muy largo");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("Correo no valido");
        return false;
    }
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if (usuario.length>20){
        alert("El usuario es muy largo");
        return false;
    }
    else if (telefono.length>15){
        alert("El telefono es muy largo");
        return false;
    }
    else if (isNaN(telefono)){
        alert("El telefono no es un numero");
        return false;
    }

    var saludo = "Bienvenido "+ nombre + "" + apellidos + " tu usuario es: " +usuario +" tu contraseña es: "+pass;
    alert(saludo);
}


