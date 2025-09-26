// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios
// 1. Crea un bucle que imprima los números del 1 al 20

console.log("1.- Bucle, imprimir numeros del 1 al 20")
for(let e = 1; e < 21; e++){
    console.log(`Numero: ${e}`)
}

console.log()

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("2.-")

let suma = 0
let i = 1

while(i < 101){
    suma += i
    i++
}
console.log("La suma de los numeros del 1 al 100 es:", suma)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("\n3.- Mostrar todos los numeros pares del 1 al 50")
i = 1
while(i < 51){
    if(i % 2 == 0){
        console.log("Numero par:", i)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("\n4.- Dado un array de nombres, mostrar cada nombre:")

const arrayNombres = ["Luis","Andy","Leo","Nico","Jaime","Kou","Juli"]

for(let valor of arrayNombres){
    console.log("Nombre de la lista/array:",valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("\n5.- Contar la cantidad de vocales de un String")

let cadenaTexto = "Zoi una KAdenA wIii"
console.log(`String: ${cadenaTexto}`)
let contadorVocales = 0

for(let valor of cadenaTexto.toLowerCase()){
    if("aeiou".includes(valor)){ // Reviso si el string "aeiou" incluye el string/letra que voy recorriendo 
        contadorVocales ++
    }
}
console.log(`La cadena de texto tiene ${contadorVocales} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("\n6.-")
const arrayNumeros = [12,2,3,5,1,2]
console.log("Array:", arrayNumeros)

let resultado = 1

for(let valor of arrayNumeros){
    resultado *= valor 
}
console.log(`Reultado de multiplicar todos los numeros del array: ${resultado}`)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("\n7.- Tabla del 5 con un bucle")

let numero = 0

while(numero < 11){
    console.log(`5 * ${numero} = ${5 * numero}`)
    numero ++
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("\n8.- Invertir cadena de texto")
let palabraOriginal = "Hola mundo"
let palabraInvertida = ""
console.log(`Palabra original: ${palabraOriginal}`)
console.log("Invirtiendo la palabra ...")

for(let i = palabraOriginal.length -1; i > -1; i--){
    palabraInvertida +=  palabraOriginal[i] 
}

console.log(`Palabra invertida: ${palabraInvertida}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("\n9.- Finonacci")


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("\n10.- ")

let arrayInicial = [12, 2, 53, 1, 98, 1234, 41,9]
console.log(`Array inicial:\n`, arrayInicial)

let segundoArray = []

for(let valor of arrayInicial){
    if(valor > 10){
        segundoArray.push(valor)
    }
}

console.log(`Array con numeros mayores a 10:`, segundoArray)