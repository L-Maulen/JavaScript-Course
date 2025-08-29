// 1. Imprime por consola tu nombre si una variable toma su valor


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 5

if(numero > 0){
    console.log("El numero guardado es positivo, con un valor de :",numero)
} else if(numero < 0){
    console.log("El numero guardado es negativo, con un valor de :",numero)
} else{
    console.log("El numero es cero.")
}

console.log()
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edadPersona = 17

if(edadPersona >= 18){
    console.log("La persona tiene edad para votar al ser mayor de edad.")
} else if(edadPersona < 18){
    console.log("La persona no puede votar por ser menor de edad, le faltan", 18 - edadPersona,"años para poder votar.")
} else{
    console.log("La edad ingresada no es valida")
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma


// 9. Usa un switch para hacer de nuevo el ejercicio 6


// 10. Usa un switch para hacer de nuevo el ejercicio 7