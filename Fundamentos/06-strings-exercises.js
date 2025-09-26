// 1. Concatena dos cadenas de texto

let cadena1 = "Hola "
let cadena2 = 'Mundo?'

let palabra = cadena1 + cadena2

console.log(palabra)
console.log(cadena1 + cadena2)
console.log()

// 2. Muestra la longitud de una cadena de texto
console.log("Mostrando la longitud de una cadena de texto: " + palabra.length)

// 3. Muestra el primer y último carácter de un string
console.log("Mostrando el primer caracter del string:", palabra[0])
console.log("Mostrando el ultimo caracter del string:", palabra[palabra.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(`\n--- Convirtiendo el String original "${palabra}" ---`)
console.log("Todo a mayusculas:", palabra.toUpperCase())
console.log("Todo a minusculas:", palabra.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let texto = `Creando
una
cadena de texto
en varias lineas
`

console.log("\n"+texto)

// 6. Interpola el valor de una variable en un string

let variable = 643 

console.log(`\nInterpolando el valor de una variable en un String`)
console.log(`Este es un String con una variable como: ${variable}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
palabra = "String de prueba para el ejercicio 7"
console.log("\n--- Reemplazando los espacios de un String con '-' ---")
console.log("Palabra original:",palabra)
console.log(palabra.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("\n--- Comprobando si 2 strings son iguales ---")
console.log("Palabra especifica: 'prueba'")
console.log(palabra.includes("prueba"))

// 9. Comprueba si dos strings son iguales
let palabra1 = "Hola mundo!"
let palabra2 = "Hola Mundo!"

console.log("\n--- Comprobando si dos Strings son iguales ---")
console.log("String 1: " + palabra1)
console.log("String 2: " + palabra2)
console.log("Son iguales?(===):", palabra1 === palabra2)
console.log("Son iguales?(==):", palabra1 == palabra2)

// 10. Comprueba si dos strings tienen la misma longitud


