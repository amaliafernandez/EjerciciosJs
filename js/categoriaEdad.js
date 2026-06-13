//Categoría por edad: Crear un programa que pida la edad de un jugador de fútbol y
// determine su categoría según la siguiente regla: Si tiene menos de 12 años
// es "Infantil", si tiene entre 12 y 17 años es "Juvenil", y si tiene 18 años o más
// es "Mayor".

const edad = parseInt(prompt("Ingrese su edad: "))
if (edad >= 18){
    alert("Categoria Mayor ")
}
else{
    if (edad >= 12 && edad <= 17){
        alert("Categoria Juvenil")
    }
    else {
        alert("categoria Infantil")
    }
}
