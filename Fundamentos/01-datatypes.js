//      -----Tipos de datos Primitivos en JavaScript     -----

/* string (cadena de texto) */
let nombre = "Luis";
let alias = 'Lucho';
let mail = `luis@gmail.com`;


/* number (número) */
let edad = 20; // Numero entero
let altura = 1.70; // Numero decimal

/* boolean (booleano) */
let esEstudiante = true; // Verdadero
let tieneTrabajo = false; // Falso  

/* Undefined (indefinido) */
let ciudad; // No se ha asignado un valor
console.log(ciudad); 

// Se usa para declarar una variable sin valor inicial para despues asignarle un valor.

/* null */
let valorNulo = null; // No hay valor asignado
console.log(valorNulo);

/* Symbol */
let miSimbolo = Symbol("mysymbol"); // Un símbolo único
console.log(miSimbolo);
// Los simbolos son valores unicos que pueden ser usados como identificadores únicos para propiedades de objetos.


/* BigInt */
let numeroGrande = BigInt(1234567890123456789012345678901234567890); // Un número entero grande
console.log(numeroGrande);  
// Se usa para representar números enteros que son demasiado grandes para el tipo Number de JavaScript.

// Forma para comprobar el tipo de dato
console.log("----------- Comprobación de tipos de datos -----------");
console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof esEstudiante); // boolean
console.log(typeof tieneTrabajo); // number
console.log(typeof ciudad); // undefined
console.log(typeof valorNulo); // object (null es un objeto en JavaScript)
console.log(typeof miSimbolo); // symbol
console.log(typeof numeroGrande); // bigint