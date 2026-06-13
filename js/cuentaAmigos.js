//Repartiendo la cuenta: Un grupo de amigos va a cenar. El algoritmo debe pedir el costo total
//de la cena y la cantidad de personas.
//Luego, debe mostrar cuánto dinero debe pagar cada uno en partes iguales.

const totalCuenta = parseFloat(prompt("Ingrese el monto total de la cuenta: "))
console.log(totalCuenta)

const invitados = parseInt(prompt("Ingresar el numero  total de invitados: "))
console.log(invitados)


const costoIndividual = totalCuenta / invitados
console.log("cada uno debe pagar lo siguiente: " + costoIndividual)


