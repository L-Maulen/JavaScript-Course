/* MAPS */

// Es como los JSON o Diccionarios, se conforma del par ordenado clave - valor

// Declaracion

let myMap = new Map()

console.log("\n--- Map vacio ---")
console.log(myMap)

console.log("\n--- Map inicializado ---")
myMap = new Map([
    ["name","Luis"],
    ["edad",21],
    ["casado",false]
]) 

console.log(myMap)

// Metodos y propiedades
console.log("\n----- Metodos y Propiedades -----")

// Set
console.log("\n--- Sets ---")

myMap.set("alias","Luxo_amd")
console.log(myMap)

// Intento modificar el nombre
console.log("\n-- Intentando actualizar una clave --")
myMap.set("name","Luxo")
console.log(myMap) // Como la llave/clave ya existe, se actualiza su valor


// Get
console.log("\n--- Get ---")

console.log(myMap.get("name")) // El metodo get, retorna el valor segun la clave/llave que le demos

// Has
console.log("\n--- Has ---")
console.log(myMap.has("name")) // Retorna un booleano si la clave existe o no un valor para esa clave
console.log(myMap.has("lastname"))


// delete
console.log("\n--- Delete ---")
console.log("Eliminando un elemento del Map")
myMap.delete("casado")
console.log(myMap)

/*
// Clear
console.log("\n--- Clear ---")
// Limpiar el Map
myMap.clear()
console.log(myMap)
*/

// Mas metodos
console.log("\nMas metodos\n")

// Keys
console.log("\n-- Keys --")
console.log(myMap.keys())
// Retorna una lista con las claves que existen en el Map

// Values
console.log("\n-- Values --")
console.log(myMap.values())


// Size
console.log("\n-- Size --")
console.log(myMap.size)

// Claves y valores
console.log("\n-- Claves y valores --")
console.log(myMap.entries())
// Me entrega todos los pares de claves y valores del Map