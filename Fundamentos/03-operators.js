/* ------------- OPERADORES ------------- */

// Operadores Aritméticos
console.log("Suma")
console.log(5 + 8) // Suma

let a = 10
let b = 3
console.log("\nResta") 
console.log(a - b) // Resta

console.log(a/b) // Division

console.log("\nIncremento")
console.log("a antes de incremento: " + a)
a++
console.log("Nuevo valor de a:", a)


console.log("\nDecremento")
console.log("b antes de decremento: " + b)
b--
console.log("Nuevo valor de b:",b)

console.log("\nDivisión")
let numero = 1/8
console.log(numero)
// Imprime el resultado

numero = 0.8 // Si es 0,8 imprime 0 
console.log(numero,"\n")

// Operadores de Asignación
let c = 2
console.log("\nValor inicial de c: " + c)
c += 3 // c = c + 3
console.log("Operador de asignación += : " + c)

/*
Se puede utilizar otras expresiones con los operadores de asignación, como:

-=
*=
/=
%=
**=

*/

// Operadores de Comparación

console.log("\n------- OPERADORES DE COMPARACION -------")
let x = 9
let y = 10
console.log("Valor de x: " + x)
console.log("Valor de y: " + y + "\n")

console.log("x es igual a y?: " + (x == y)) // Igualdad
console.log("x es distinto a y?: " + (x != y)) // Diferente
console.log("x es mayor que y?: " + (x > y)) // Mayor que
console.log("x es menor que y?: " + (x < y)) // Menor que
console.log("x es mayor o igual que y?: " + (x >= y)) // Mayor o igual que
console.log("x es menor o igual que y?: " + (x <= y)) // Menor o igual que 
console.log("\n")

console.log("x == 5?:",x == 5)
console.log("x == x?:",x == x)
console.log("x === 5?:",x === 5)

console.log("\n--- Igualdad por valor ---")
console.log("Valor de x:", x)
console.log(x == x)
console.log("x == '9'?:",x == "9") // true // Igualdad por valor de la variable
console.log("x == 9?:",x == 9) // true // Igualdad por valor de la variable

// Cuando usamos == usamos una igualdad por valor
// En JavaScript, el operador == compara los valores después de realizar conversiones de tipo si es necesario.
// Por eso en este caso, al comparar un número con una cadena que representa el mismo número, devuelve true



// Cuando usamos === usamos una igualdad por valor y tipo de dato de la variable
console.log("\n--- Igualdad por identidad (valor y tipo) ---")
console.log("Valor de x:", x)
console.log("x === x?:",x === x) // true
console.log("x === '9'?: ", x === "9") // false
console.log("x === 9?: ", x === 9) // true

// Se utilizaria el operador === cuando queremos asegurarnos de que tanto el valor como el tipo de dato sean iguales

console.log("x !== '9'?:",x !== "9") // true
console.log("x !== 9?:",x !== 9) // false

// x !== "9": x es número (9), "9" es String. Son de distinto tipo -> true.
// x !== 9: Ambos son número y tienen el mismo valor -> false.

// Para los booleanos:
// El 0 representa false
// El 1 representa true
console.log("\n--- Comparacion de booleanos ---")
console.log("0 == false?:", 0 == false) // true
console.log("1 == false?:",1 == false) // false
console.log("2 == false?:",2 == false) // false

// Solo el numero 0 es igual a false, cualquier otro numero no lo es

console.log("\n--- Mas comparaciones con 0 ---")
console.log("0 == '' (Cadena/String vacia)?:", 0 == '') 
console.log("0 == ' ' (Cadena/String vacia con espacio)?:", 0 == ' ') 
console.log("0 == 'Hola' (sera true tambien?):", 0 == "Hola")
console.log("0 === ''?:",0 === '') // false, porque 0 es number y '' es string
console.log("\nUndefined == null?:", undefined == null) // true, porque ambos representan ausencia de valor
console.log("Undefined === null?:", undefined === null) // false, porque son de distinto tipo

/* Valores absolutamente verdaderos (truthy values) */
// Todos los numeros (negativos y positivos) excepto el 0
// Todas las cadenas de texto (strings) menos las vacias
// El boolean true

/* Valores absolutamente falsos (falsy values) */
// El numero 0
// EL 0n (BigInt cero)
// null
// undefined
// NaN (Not a Number)
// El boolean false
// Cadenas de texto (strings) vacias (Aquellos que no tienen caracteres, ni espacios, ni nada)

/*
Una cadena con espacios ' ' es truthy.
Pero, al comparar con 0 usando ==, ambas ('' y ' ') se convierten a 0, por lo que la comparación da true.
*/

// OPERADORES LÓGICOS
console.log("\n------- OPERADORES LOGICOS -------")
// Sirve para comparar la parte booleana de las variables (buscar si unas expresiones son verdaderas o falsas)

// and (&&)
console.log("and (&&)")
console.log("5 > 10",5 > 10)
console.log("5 < 10 && (and) 5 15 > 20?:",5 < 10 && 15 > 20) // false, porque una de las dos expresiones es falsa
console.log("5 < 10 && (and) 15 < 20?:",5 < 10 && 15 < 20) // true, porque ambas expresiones son verdaderas

/* Para que una expresión con && sea true, todas las expresiones deben ser verdaderas */

// or (||)
console.log("\nor (||)")
console.log("5 < 10 || (or) 15 > 20?:",5 < 10 || 15 > 20) 
console.log("5 < 10 || (or) 15 < 20?:",5 < 10 || 15 < 20) 

// Si se cumple minimo una de las expresiones, la expresión completa es true

console.log("\nUtilizando los 2 operadores")
console.log(5 > 10 && 15 > 20 || 30 > 40) // false, no se cumple el and 
console.log(5 > 10 && 15 > 20 || 30 < 40) // true, se cumple el or

// not (!)
console.log("\nnot (!)")
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// El resultado que me da es el contrario al resultado de la expresión
// Con el operador not (!) niego el valor de una expresion (la invierto)


// Operadores Ternarios
// los operadores ternarios permiten escribir una condicion (otra forma de escribir condicionales)
console.log("\n------- OPERADORES TERNARIOS -------")

const isRaining = false 

// El operador ternario esta formado por los simbolos '?' y ':'
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

// Si se cumple la primera condicion (lo que va antes de los ':') se ejecuta esa parte
// Sino, se cumplira lo que va despues de los ':'
