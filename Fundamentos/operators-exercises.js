// 1.- Crea una variable para cada operacion aritmetica
let a = 4 + 1
let b = 4 - 1
let c = 10 * 2
let d = 14 / 8
let e = 14 % 8
let f = 2 ** 3

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log()

// 2.- Crea una variable para cada tipo de operacion de asignacion, que haga uso
// de las variables utilizadas para las operaciones aritmeticas

let suma = a
suma += 4 // suma = suma + 4
console.log("Valor de suma con asignacion +=", suma)

let resta = b
resta -= 8
console.log("Valor de resta con asignacion -=", resta)

let multi = c
multi *= 4
console.log("Valor de multi con asignacion *=", multi)

let division = d
division /= 8
console.log("Valor de division con asignacion /=", division)

let modulo = e
modulo %= 4
console.log("Valor de modulo con asignacion %=", modulo)

let exponente = f
exponente **= 3
console.log("Valor de exponente con asignacion **=", exponente)
console.log()


// 3.- Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
let var1 = 5
let var2 = "5"

console.log(var1 == var2)
console.log("5" === var2)
console.log(var1 != 3)
console.log("Hola mundo" !== var1)
console.log(var1 !== 3)
console.log()


// 4.- Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log("HOLA mUndO" === "Hola mundo")
console.log(2 === "2")
console.log(var1 != "5")
console.log(var1 !== 5)
console.log(0 == 2)
console.log()

// 5.- Utiliza el comparador logico AND
console.log("Usando el comparador logico '&& (AND)'")
console.log(var1 > 1 && 4 > 2)
console.log("HOla mundo" != "Hola" && 5 !== '5')

// 6.- Utiliza el comparador logico OR
console.log("\nUsando el comparador logico '||' (OR)")
console.log(9 == 0 || 3 > 0)

// 7.- Combina ambos comparadores logicos
console.log("\nCombinando ambos comparadores logicos")
console.log("Hola" === 'Hola' && 49876 >= 1234 || 0 !== null)

// 8.- Añade alguna negacion
console.log("\nAñadiendo una negacion")
console.log(!("Hola Mundo" == "Hola mundo"))
console.log("Hola Mundo" == "Hola mundo")


// 9.- Utiliza el operador ternario
console.log("\nUtilizando el operador ternario")

let ternario = 0

ternario? console.log("La variable contiene un valor true (distinto de 0)"): console.log("El valor de la variable es 0")

// 10.- Combina operadores aritmeticos, de comparacion y logicos
console.log("\nCombinando operadores aritmeticos, de comparacion y logicos")
let combinacion = (5 + 3) > 7 && (10 - 2) < 5 || (2 * 3) === 6
console.log(combinacion)