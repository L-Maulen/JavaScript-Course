// 1. Imprime por consola tu nombre si una variable toma su valor

console.log("\n----- Ejercicio 1 -----\n")
let nombre = "Luis"

if(nombre == "Luis"){
    console.log("Hola mi nombre es:",nombre)
} else{
    console.log("Ese no es mi nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("\n----- Ejercicio 2 -----\n")

let usuario = "admin"
let contrasena = "1234"

if(usuario == "admin" && contrasena == "1234"){
    console.log("Bienvenido usuario:",usuario)
} else{
    console.log("Usuario o contraseña incorrecta")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("\n----- Ejercicio 3 -----\n")

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
console.log()
let variable
let edad = 17

variable = edad >= 18? "Adulto": "Menor"
console.log(variable)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log()

let mes = 0

if(mes > 12 || mes < 1){
    console.log("El valor del mes debe estar entre 1 y 12.")
} else if(1 <= mes <= 3){
    console.log("Nos encontramos en Verano!! Qué calor!")
} else if(4 <= mes <= 6){
    console.log("Estamos en Otoño, pronto se acerca el frío y la nieve")
} else if(7 <= mes <= 9){
    console.log("Es Invierno y el frío se hace notar!!")
} else{
    console.log("Primavera casi verano, rico para una ida a la playa o piscina")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch
console.log("\n----- Ejercicio 7 -----\n")

// Cuales son los meses con 30 dias: Abril(4), Junio(6), Septiembre(9), Noviembre(11)
// Cuales son los meses con 31 dias: Enero(1), Marzo(3), Mayo(5), Julio(7), Agosto(8), Octubre(10), Diciembre(12)
// Febrero(2) tiene 28 dias o 29 en año bisiesto

mes = 4

switch(mes){
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 dias")
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días.")
        break
    case 2:
        console.log("Este mes es febreo, puede tener 28 dias o 29 si es año bisiesto")
        break
    default:
        console.log("Debes ingresar un numero valido para el mes (1 - 12)")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Deutsch"

console.log()
switch (idioma.toLowerCase()){
    case "español":
        console.log("Buenos dias estrellitas, la tierra les dice hola!!")
        break
    case "english":
        console.log("Good morning my dear")
        break
    default:
        console.log("Nose mas idiomas jaja")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("\n----- Ejercicio 9 (6 pero con switch) -----\n")

mes = 0

switch(mes){
    case 1:
    case 2:
    case 3:
        console.log("Nos encontramos en Verano!! Qué calor!")
        break
    case 4:
    case 5:
    case 6:
        console.log("Estamos en Otoño, pronto se acerca el frío y la nieve")
        break
    case 7:
    case 8:
    case 9:
        console.log("Es Invierno y el frío se hace notar!!")
        break
    case 10:
    case 11:
    case 12:
        console.log("Primavera casi verano, rico para una ida a la playa o piscina")
        break
    default:
        console.log("El valor del mes debe estar entre 1 y 12.")
}

/* 
En JavaScript, los case de un switch no aceptan expresiones lógicas como "mes > 12 || mes < 1 o 1 <= mes <= 3"
El switch compara el valor de la variable (mes) con el valor literal de cada case usando ===.

*/

// 10. Usa un switch para hacer de nuevo el ejercicio 7

