/* SETS */
console.log("------- SETS -------")

// Declaracion

mySet = new Set() // Este es un set vacio
mySet2 = {}  // ESTO NO ES UN SET X

console.log()
console.log(mySet)
console.log(mySet2)
console.log()

// Inicializacion
mySet = new Set('Luis', 'DEV', 99, true, 'Hola mundo') // Esta NO es la forma de inicializar un set con datos
mySet = new Set(['Luis', 'DEV', 99, true, 'Hola mundo'])
console.log(mySet)

/* Metodos comunes */
console.log("\n----- Metodos comunes -----")

// Add
console.log("\n---- Add ----")
mySet.add("Nuevo elemento en el set") // Con add, añade el elemento al final del set
console.log(mySet)

// Delete
console.log("\n--- Delete ---\n(No funciona)")
mySet.delete() // El delete tal cual, no eliminara ningun elemento del set, debemos especificarle lo que queremos borrar
console.log(mySet)

console.log("\nEspecificando el elemento a borrar con un indice\n(Tampoco funciona)\n")
mySet.delete(-1)
console.log(mySet)

console.log("\nEliminando el elemento del set\n")

mySet.delete("Luis") // Se debe especificar el elemento a eliminar dentro del set para que resulte
console.log(mySet)
console.log()

// El delete retorna true o false (si trato de hacerle un console.log al elemento que elimino)

//Intentando acceder al elemento en X posicion del set
console.log(mySet[0]) // undefined, no existe el elemento en esa posicion, pero el set si lleva un orden

// Has
console.log("\n----- Has -----")

console.log(mySet.has(99))
console.log(mySet.has("DEV"))
console.log(mySet.has("99"))
// Retorna un true o false si el elemento espeficado se encuentra o no en el set

// Size
console.log("\n---- Size ----")

console.log(mySet.size)


// Convertir Set a un Array (y viceversa)
console.log("\n----- Transformar de Set a un Array -----")

let myArray = Array.from(mySet)
console.log(myArray)

console.log("\n--- Transformar de Array a Set ----")

mySet = new Set(myArray)
console.log(mySet)

// DIFERENCIAS
console.log("\n----- Diferencias de Arrays y Sets -----")
console.log("\n--- Set ---")
mySet.add("DEV")
mySet.add("DEV")
mySet.add("DEv") // Funciona porque DEV y DEv son distintos elementos
console.log(mySet)

console.log("\n--- Array ---")
myArray.unshift("DEV",99)
myArray.push("Luis")
console.log(myArray)

// Los sets NO PERMITEN DUPLICADOS, todos los elementos de los sets son UNICOS