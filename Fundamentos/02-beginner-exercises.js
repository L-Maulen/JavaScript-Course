// Ejercicio 1: Escribe un comentario en una línea

// Comentario de una línea

// Ejercicio 2: Escribe un comentario en varias líneas

/* 
    Comentario
    En
    Varias
    Lineas
*/

// Ejercicio 3: Declara variables con valores asociados a todos los datos de tipos primitivos en JavaScript
let vNumero = 42; // Número
let vCadena = "Variable de string"; // Cadena de texto / String
let vBooleano = true; // Boolean
let vNulo = null; // Null
let vIndefinido; // Indefinido
let vSimbolo = Symbol("simbolo"); // Símbolo
let vBigInt = 9007199254740991n; // BigInt


// Ejercicio 4: Imprime por consola el valor de cada variable declarada en el ejercicio anterior
console.log("------- Imprimendo valores de las variables -------");
console.log(vNumero);
console.log(vCadena);
console.log(vBooleano);
console.log(vNulo); 
console.log(vIndefinido);
console.log(vSimbolo);
console.log(vBigInt);
console.log("---------------------------------------------------\n");

// Ejercicio 5: Imprime por consola el tipo de dato de todas las variables

console.log("------- Imprimendo tipos de las variables -------");
console.log(typeof vNumero)
console.log(typeof vCadena)
console.log(typeof vBooleano)
console.log(typeof vNulo)
console.log(typeof vIndefinido)
console.log(typeof vSimbolo)
console.log(typeof vBigInt)
console.log("---------------------------------------------------")

// Ejercicio 6: Modifica los valores de las variables por otros del mismo tipo
vNumero = 100;
vCadena = "Nuevo valor de string";
vBooleano = false;
vNulo = null; // null sigue siendo null
vIndefinido = undefined; // undefined sigue siendo undefined
vSimbolo = Symbol("nuevo simbolo");
vBigInt = 12345678901234567890n;

// Ejercicio 7: Modifica los valores de las variables por otros de distinto tipo
console.log("\n------- Modificando valores de las variables por otros de distinto tipo -------");
vNumero = "Ahora soy un string";
vCadena = 12345;
vBooleano = "true";
vNulo = "No soy más null";
vIndefinido = null;
vSimbolo = "No soy más un símbolo";
vBigInt = "No soy más un BigInt";

console.log(vNumero)
console.log(vCadena)
console.log(vBooleano)
console.log(vNulo)
console.log(vIndefinido)    
console.log(vSimbolo)
console.log(vBigInt)
console.log("---------------------------------------------------")

// Ejercicio 8: Declara constantes con valores asociados a todos los tipos de datos primitivos en JavaScript

const cNumero = 3.14; // Número
const cCadena = "Constante de string"; // Cadena de texto / String
const cBooleano = false; // Boolean
const cNulo = null; // Null
const cIndefinido = undefined; // Indefinido
const cSimbolo = Symbol("constante simbolo"); // Símbolo
const cBigInt = 12345678901234567890n; // BigInt

// Ejercicio 9: Modifica el valor de las constantes declaradas en el ejercicio anterior y observa qué sucede

//cNumero = 6.28; // 
//cCadena = "Nuevo valor de constante string"; // Esto generará un error
//cBooleano = true; // Esto generará un error
//cNulo = "No soy más null"; // Esto generará un error
//cIndefinido = "No soy más undefined"; // Esto generará un error
//cSimbolo = Symbol("nuevo constante simbolo"); // Esto generará un error
//cBigInt = 9007199254740991n; // Esto generará un error

// Error con la constante cNumero -> TypeError: Assignment to constant variable.
// Error con la constante cCadena -> TypeError: Assignment to constant variable.
// Error con la constante cBooleano -> TypeError: Assignment to constant variable.
// Error con la constante cNulo -> TypeError: Assignment to constant variable.
// Error con la constante cIndefinido -> TypeError: Assignment to constant variable.
// Error con la constante cSimbolo -> TypeError: Assignment to constant variable.
// Error con la constante cBigInt -> TypeError: Assignment to constant variable.
