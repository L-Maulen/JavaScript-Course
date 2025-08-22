console.log("!Hola mundo¡\n")

// Comentario simple (solo la linea)

/*
Esto es un comentario en varias
lineas
*/

        /* FORMAS DE CREAR VARIABLES EN JAVASCRIPT */

console.log("-----  Formas de crear variables en JavaScript -----\n");
    
    // ------  VAR  ------ 
// * Forma original de declarar variables en JavaScript *
console.log(holaMundo) // Con var puedo acceder a la variable antes de su declaración
var holaMundo = "¡Hola, mundo!";
// Se usa primero la palabra reservada 'var' y despues el nombre de la variable (se usa camelCase para nombrar variables)

// Ejemplo de uso de la variable
console.log(holaMundo);

holaMundo = "¡Hola, mundo actualizado!";
console.log(holaMundo);


// Forma principal de declarar variables en JavaScript, usando let y const (para evitar problemas de definicion o asignacion de variables en memoria)
    // ------  LET  ------

// Intentando acceder a una variable declarada con let antes de su declaración
//console.log(saludo); // Esto dará un error porque 'saludo' no está definida aún
let saludo = "¡Hola, mundo con let!";
console.log(saludo);  

saludo = "¡Hola, mundo actualizado con let!";
console.log(saludo);

// Las variables declaradas con let, solo pueden ser accesibles dentro de un bloque (un lugar donde se ejecuta el codigo)


    // ------ CONST ------
//console.log(saludoConst); // Esto dará un error porque 'saludoConst' no está definida aún
const saludoConst = "¡Hola, mundo con const!";
console.log(saludoConst);

saludoConst = "¡Hola, mundo actualizado con const!"; // Esto dará un error porque las variables declaradas con const no pueden ser reasignadas
console.log(saludoConst);

// EL valor de las variables const, son constantes, no pueden ser modificadas una vez asignadas
// Pero no significa que sean inmutables

