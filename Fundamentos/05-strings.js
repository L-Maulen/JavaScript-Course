// ------ STRINGS ------

let myName = "Luis"
let greeting = "Hola, " + myName + "!" // Concatenacion con +

console.log(greeting)
console.log(typeof greeting) // Tipo string


// Metodos de strings
console.log("\n---- Metodos de strings ----")
// Longitud
console.log("\nLongitud de la cadena:", greeting.length)

// Acceso a caracteres)
console.log("Caracter en posicion 0:",greeting[0])
// En JavaScript tambien se comienza a contar desde 0
console.log("greeting[12]:", greeting[12]) // El caracter en la posicion 12 (no existe, da undefined)
console.log("Ultimo caracter:", greeting[10]) 


// Metodos comunes
console.log("\n--- Metodos comunes ---")
console.log(greeting.toUpperCase())  // Usa los '()' porque es una funcion que convierte todo el String a mayusculas
console.log(greeting.toLowerCase()) // Convierte todo el String a minusculas
console.log(greeting.indexOf('Luis')) // Devuelve la posicion en la que encuentra la palabra 'Luis'
console.log(greeting.indexOf("Hola"))
console.log(greeting.includes("Hola")) // Devuelve true si la cadena contiene la palabra 'Hola'
console.log(greeting.includes("Adios")) // Devuelve false si la cadena no contiene la palabra 'Adios'

console.log(greeting.slice(0, 5)) // Extrae una parte del string desde la posicion 0 hasta la 5 (exluyendo el ultimo valor)
console.log(greeting.replace("Luis", "Mundo")) // Reemplaza la palabra 'Luis' por 'Mundo'
console.log(greeting) // El string original no se modifica


// Template literals (plantillas literales)
console.log("\n--- Template literals (plantillas literales) ---")

/*
let mensaje = "Hola estoy usando
JavaScript en VSC"
*/
// Asi no funciona, da error de sintaxis

let mensaje = `Hola, con estas comillas
JavaScript permite saltos de linea
y usar "comillas dobles" y 'comillas simples'
`
console.log(mensaje)

// Insertando variables en un string
console.log("---- Insertando variables en un string ----")

let nombre = "Luis"
console.log("Hola, ${nombre}!") // No funciona, no interpreta la variable
console.log(`Hola, ${nombre}!`) // Usando las comillas invertidas si funciona

