// BUCLES

// Estructura de control que repite bloque de codigo mientras una condicion sea verdadera

// For
console.log("---- Bucle FOR ----")

for (let i = 0; i < 5; i++){ // Se debe declarar una variable interna en el bucle, especificar la condicion de esta, y su incremento
    // COdigo a repetir
    console.log(`Saludo ${i}`)
}
// El codigo se ejecutara 5 veces, ya que se basa en la condicion de que la variable "i" sea menor que 5

console.log("\n-- Recorriendo una lista con for --")

const numbers = [1,2,3,4,5]

for(let i = 0; i < numbers.length; i++ ){
    console.log(`Numero ${i + 1} de la lista: ${numbers[i]} `)
}


// While
console.log("\n---- Bucle WHILE ----")
// Se evalua antes de cada iteracion

let i = 0
while(i < 5){
    console.log(`Saludo ${i}`)
    i++
}

// Se debe crear la variable, y se especifica su incremento, de lo contrario seria un bucle infinito o daria error

console.log()

/* -- Bucle infinito --

// while(true){
//     // Codigo
// }

*/

// do while
console.log("---- Bucle DO WHILE ----")

// i = 0 -> Asi le inicialice en un inicio
i = 6

do{
    console.log(`Saludo ${i}`)
    i++
} while(i < 5)

// En este bloque, SIEMPRE se ejecuta al menos una vez, dependiendo de su condicion


// For of
console.log("\n---- Bucle FOR OF ----")
// Sirve para recorrer valores de algo que sea iterable
// Algo iterable? -> Una estructura de datos o algun tipo de dato

const myArray = ['Luis', 'DEV', 99, true, 'Hola mundo']
const mySet = new Set(['Lusho', 'xd', 121, false, 'Aloh', "Palabra"])
const myMap = new Map([
    ["name","Luis"],
    ["edad",21],
    ["casado",false]
]) 

let palabra = "Hola JavaScript!"

for(let valor of myArray){
    console.log(valor)
}

console.log("--Set--")

for(let valor of mySet){
    console.log(valor)
}

console.log("--Map--")

for(let valor of myMap){
    console.log(valor)
}

console.log("--Palabra / String--")

for(let valor of palabra){
    console.log(valor)
}

// Buenas practicas
console.log("\n--- Buenas practicas ---")
// 1.- Revisar siempre tratar de no crear un bucle infinito

// Break y continue
console.log("- Uso de continue y break -")

for (let i = 0; i < 10; i++){ 
    if(i == 2){
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Saludo ${i}`)
}