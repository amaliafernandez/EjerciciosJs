//Validando el inicio de sesión: Crear un simulador simple de login. El algoritmo debe pedir un usuario
// y una contraseña. Si el usuario es "admin" y la contraseña es "1234", debe mostrar "Acceso concedido".
// De lo contrario, debe mostrar "Usuario o contraseña incorrectos"

const usuario = prompt("Ingresá un nombre de usuario")

const password = prompt("Ingresá tu contraseña")

if (usuario === "admin" && password === "1234") {
alert("¡Acceso concedido! Bienvenido al sistema")
}
else {
    alert("¡acceso denegado")
}
