// 1. Crea una función que reciba dos números y devuelva su suma
console.log("1.- Funcion que sume 2 numeros:")

function sumaNumeros(a, b){
    return a + b
}

console.log(sumaNumeros(8,123))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("\n2.-")

let arregloNumeros = [1,45,12,9,-13,5/3,2222]
console.log("Arreglo:", arregloNumeros)

const funNumeroMayor = (arregloNumeros) => {
    let numeroMayor = 0
    for(let valor of arregloNumeros){
        if(valor > numeroMayor){
            numeroMayor = valor
        }
    }
    return numeroMayor
}

console.log("El numero mayor del arreglo es:",funNumeroMayor(arregloNumeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("\n3.-")

let palabra = "Este es el ejercicio numero 2"
console.log("Palabra a recorrer:", palabra)

const funcionVocalesPalabra = (string) => {
    let cantidadVocales = 0
    
    for(let valor of string){
        if("aeiou".includes(valor)){ // Reviso si el string "aeiou" incluye el string/letra que voy recorriendo 
            cantidadVocales += 1
        }
    }

    return cantidadVocales
}

console.log("La cantidad de vocales de la palabra es:",funcionVocalesPalabra(palabra))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("\n4.-")
console.log("Array de strings original:")

let arrayStrings = ["Palabra", "luego", "hola mundo","Jaskvf"]
console.log(arrayStrings)

function funArrMayusculas(arreglo){
    let arregloMayusculas = []

    arreglo.forEach(
        (value) => arregloMayusculas.push(value.toUpperCase())
    )

    return arregloMayusculas
}
console.log("\nNuevo arreglo con las mismas palabras en mayusculas:\n",funArrMayusculas(arrayStrings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("\n5.-")
let numero = 28
console.log("Numero seleccionado:",numero)

const funNumPrimo = (numero) => {
    if (numero <= 1) return false; // 0, 1 y negativos no son primos

    for (let i = 2; i < numero; i++) { // Un numero es primo si solo es divisible por si mismo (y el 1)
        if (numero % i === 0) { // No consideramos al 1, por ende, si otro numero resulta ser su divisor, no es primo
            return false;
        }
    }
    
    return true;
}

if(funNumPrimo(numero)){
    console.log(`El numero ${numero} es primo.`)
} else{
    console.log(`El numero ${numero} NO es primo.`)
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("\n6.- ")
let arreglo1 = [true, false, 1, "312", "123", 0.21]
let arreglo2 = [false, "HolaM", "Luis", [1,5,1], "123"]

function elemComunesArrays(arreglo1, arreglo2){
    let arregloConjunto = []

    for(let valor of arreglo1){
        if(arreglo2.includes(valor)){
            arregloConjunto.push(valor)
        }
    }

    return arregloConjunto
}

console.log("Elementos comunes de las 2 listas:\n",elemComunesArrays(arreglo1,arreglo2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("\n7.- ")

arreglo1 = [1,52,123,6,23,97,23,654,309,26,31,23,22,88]

const funSumPares = (arregloNums) => {
    let suma = 0

    for(let valor of arregloNums){
        if(valor%2 === 0){
            suma += valor
        }
    }
    return suma
}
console.log("La suma de todos los numeros pares es:",funSumPares(arreglo1))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("\n8.- ")

arreglo1 = [12,5,16,9,4,1,7]

const funCuadrados = (arreglo) => {
    let arregloCuadrados = []

    for(let valor of arreglo){
        arregloCuadrados.push(valor**2)
    }

    return arregloCuadrados
}

console.log("EL nuevo arreglo con los valores al cuadrado es:\n", funCuadrados(arreglo1))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("\n9.-")

let texto9 = "Hola mundo, soy luis"
console.log("Palabra original:",texto9)

function funInvertirPalabra(palabra){
    let palabraInversa = ""

    for(let i = palabra.length - 1; i > -1 ;i--){
        palabraInversa += palabra[i]
    }

    return palabraInversa
}

console.log("Texto invertido:",funInvertirPalabra(texto9))

// 10. Crea una función que calcule el factorial de un número dado
console.log("\n10.-")
numero = 12

const funFactorial = (numero) => {
    let valorFactorial = 1

    for(let i = numero; i > 0 ; i--){
        valorFactorial *= i
    }

    return valorFactorial
}

console.log(`El valor factorial del numero ${numero}, es: ${funFactorial(numero)}`)