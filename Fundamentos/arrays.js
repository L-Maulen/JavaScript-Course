/* ESTRUCTURAS DE DATOS */

/* ARRAY */

// Formas de crear arrays
let myArray = [] // Sintaxis recomendada para usar arrays

// se escribe mas rapido,no da lugar a errores y es mas simple, 

let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1] // Aqui, el array reconoce el dato numerico (1) que le estamos metiendo

myArray2 = new Array(1) // Al colocar un solo numero, el array "reserva" un hueco
// Esta forma de definir el array, es mas puro, donde especificamos el largo de esta

console.log()
console.log(myArray)
console.log(myArray2)
console.log()

myArray = [1,2,3,4,"Luis", false]
myArray2 = new Array(1,2,3,4,"Luis",false) // Ahora, al meter el listado de los valores, funciona como cualquier otro array

console.log(myArray)
console.log(myArray2)
console.log()


myArray2 = new Array(3)

myArray2[0] = "Luis"
//myArray2[1] = true
myArray2[2] = 'mundo!'

console.log(myArray2)
console.log()

myArray = []

myArray[2] = "L"
//myArray[0] = "HOLA" 
myArray[1] = 0
console.log(myArray)

// Metodos comunes de listas
console.log("\n----- Metodos comunes de listas -----\n")
myArray = []

// Metodos push y pop
console.log("--- Agregando elementos con push ---")

myArray.push("Luis")
myArray.push("Dev")
myArray.push(true)
console.log(myArray)
// El metodo push agrega elementos al FINAL del array
// Sigue un orden creciente para insertar datos en la lista

console.log("\n--- ELiminando elementos con pop ---")
console.log("Lista sin modificar:")
console.log(myArray)

console.log("\nElemento eliminado del array:",myArray.pop()) // Elimino el ultimo elemento y lo devuelvo
myArray.pop() // Elimina el ultimo elemento del array
console.log("Lista luego de los pops:")
console.log(myArray)


// Shift y Unshift
console.log("\n--- Uso de Shift y Unshift ---")
console.log(myArray.shift()) // Elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Luis","DEV") // Inserta los elementos que le especifiquemos, al inicio del array
console.log(myArray)
console.log()


// lenght
console.log("--- Lenght ---")
console.log(myArray.length) // Largo de la lista/array

// Clear
console.log("--- Clear (vaciando el array) ---")

//myArray = []
//myArray.length = 0 // alternativa para vaciar la lista

console.log(myArray)

// Slice
console.log("\n--- Slice ---")
myArray.push(99,true,"Hola mundo")

let nuevoArray = myArray.slice(1,2) // Le indicamos con el primer valor, que posicion toma de la lista, hasta el segundo valor (sin considerarlo)
console.log(nuevoArray) // Por eso solo retorna una lista con 1 valor


// Splice
console.log("\n--- Splice ---")
console.log("Lista original antes del splice:")
console.log(myArray)

myArray.splice(1,3) // Elimina elementos desde el primer indice (primer numero que especifico)
// y el segundo valor, indica cuantos elementos se borraran desde le indice que le dimos
console.log(myArray)


// Pero tambien puede agregar elementos

console.log("\n-- Otro uso del splice --")
myArray = ['Luis', 'DEV', 99, true, 'Hola mundo']
console.log("Lista original:")
console.log(myArray)

myArray.splice(1,3,"Esto es nuevo!") // Indico que desde la posicion 1 (2) de la lista, borrare 3 elementos, y los reemplazare por el tercer valor
console.log(myArray)