//Contador de elefantes: Solicitar al usuario un número entero positivo.
// El programa debe imprimir en pantalla la canción de los elefantes desde el 1
// hasta el número ingresado (Ej: "1 elefante se balanceaba...",
// "2 elefantes se balanceaban...").

let num1
num1 = parseInt(prompt( "ingrese un número entero y positivo"))

if (isNaN(num1) || (!isNaN(num1) && num1 < 0)) {
    console.log('Error')
} else {

    for (let i = 1; i <= num1; i++) {
        console.log(i + " Se balanceaba sobre la tela de una araña..")
    }
}