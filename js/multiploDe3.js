//Detector de múltiplos de 3 (Zumbido): Diseñar un programa que muestre en pantalla
// los números del 1 al 15 en orden. Pero con una condición: cada vez que el número
// sea un múltiplo de 3, en lugar de mostrar el número, debe escribir la palabra "¡ZUMBIDO!"



for(let i = 1; i <= 15; i++){

    if (i % 3 === 0){
        alert("¡ZUMBIDO!")
    }else{
        console.log(i)

    }
}