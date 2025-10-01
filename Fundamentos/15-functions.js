// Funciones
console.log("---- FUNCIONES ----\n")

console.log("--- Funcion simple ---")

// Funcion SIMPLE
function miFuncion(){ // () -> Para el argumento/parametros
    // Codigo
    console.log("Hola soy una funcion.")
}

miFuncion()


// Funcion con PARAMETROS
function funWithParams(name){
    console.log(`Hola, ${name}`)
}

console.log("\n--- Funcion con parametros ---")
funWithParams(21)
funWithParams("Luis")

// Funciones ANONIMAS (funciones sin un nombre definido)
// Se deben almacenar en una variable
console.log("\n--- Funciones anonimas ---")

const myFunc2 = function(name){
    console.log(`Hola ${name}, esta es una funcion anonima`)
}

myFunc2("Luiss")

// Arrow functions / Funciones flecha
console.log("\n--- Funciones FLECHA ---")

// Forma mas conscisa de escribir funciones

let funcionArrow = (name) => {
    console.log(`Hola, ${name}, estas usando una arrow function`)
}

const funcionArrow2 = (name) => console.log(`Hola, ${name}, estas usando una arrow function (en una linea)`)

funcionArrow("Luxo")
funcionArrow2("Leo")

// Parametros
console.log("\n-- Parametros --")

function sum(a, b){
    console.log(a+b)
}


// Valores en parametros por defecto
console.log("\nFuncion con valores por defecto:")
function defaultSum(a = 5, b = 10){
    console.log(a+b)
}

sum(5,10)
defaultSum(12)
defaultSum(1,1)


// Retorno de valores
console.log("\n-- Retornando valores con funciones --")

function mult(a,b){
    return a * b
}
// mult(5,4)-> Esto no se muestra
let resultado = mult(5,10)

console.log(mult(5,4))
console.log(resultado)


// Funciones anidadas
console.log("\n--- Funciones ANIDADAS ---")

function extern(){
    console.log("1.- Funcion externa")
    function intern(){
        console.log("2.- Funcion interna")
    }

    intern() // Para llamar a la funcion interna, la invocamos dentro de la funcion exterior

}

extern()
// intern() -> Error, dara que la funcion no esta definida, fuera del scope

// Funcion de orden superior
console.log("\n--- Funcion de orden superior ---")
// Funciones que reciben otras funciones como argumento

function applyFunc(func, param){
    func(param)
}

applyFunc(funcionArrow, "Lushoo (funcion superior)")

// forEach
// Funcion que ejecuta bucles asociados a elementos iterables
console.log("\n-- Funcion FOREACH --")

myArray = ['Luis', 'DEV', 99, true, 'Hola mundo']
mySet = new Set(['Lusho', 'xd', 121, false, 'Aloh', "Palabra"])
myMap = new Map([
    ["name","Luis"],
    ["edad",21],
    ["casado",false]
]) 

myArray.forEach(
    function(value){ // Value representa al elemento que esta iterando actualmente la funcion forEach
    console.log(value)
})
console.log()

mySet.forEach((value) => console.log(value))
console.log()
myMap.forEach((value) => console.log(value)) // En los MAPS, itera sobre los valores de las llaves 

// myArray.forEach((value) => console.log(value))

// Los forEach no pueden detenerse con break o return