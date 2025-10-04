// Destructuracion y propagacion

// Destructuracion: Sintaxis que nos permite extraer valores de arrays u objetos
// y asignarlos a variables

let myArray = [1, 2, 3, 4]

let persona = {
    name: "Luis",
    edad: 21,
    alias: "Luxo"
}

console.log(myArray)

let myValue = myArray[1]
console.log(myValue)

let myName = persona.name
console.log(myName)

console.log("\n---- Destructuracion en Arrays ----")

let [myValue0, myValue1, myValue2, myValue3, myValue4]= myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores por defectos
console.log("\n--- Valores por defecto ----")

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0]= myArray // En caso de que no haya valores para las variables, seran 0
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos del array
console.log("\n--- Ignorar elementos ----")

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)


// Desestructuracion de objetos
console.log("\n---- Desestructuracion de objetos ----")

let {name, edad, alias} = persona // Deben ser los mismos nombres de las claves
console.log(name)
console.log(edad)
console.log(alias)

// Sintaxis objetos con valores por defectos
console.log("\n--- Valores por defecto Objetos----")
let {name2, edad2, alias2, email = "email@gmail.com"} = persona
console.log(name2) // NO existe
console.log(edad2) // NO existe
console.log(alias2) // NO existe
console.log(email)  // NO existe, pero le doy un valor por defecto

/* let {edad, name, alias} = persona // Cuando vamos a desestructurar en una variable un objeto
                                  // El nombre de esta, debe ser el mismo que el de la clave
console.log(name)
console.log(edad)
console.log(alias) */

// Sintaxis objetos con nuevos nombres de variables
console.log("\n--- Nuevos nombres de variables ---")

let {name: nombre1, edad: edad1, alias: alias1} = persona 
console.log(nombre1)
console.log(edad1)
console.log(alias1)

// Desestructurar objetos anidados
console.log("\n---- Desestructurar objetos anidados ----")

let persona3 = {
    name: "Luis",
    edad: 21,
    alias: "Luxo",

    walk: function(){
        console.log("Esta persona está caminando")
    },

    job: {
        name: "Programador",
        exp: 15,
        work: function(){
            console.log(`La persona de ${this.exp} años trabaja.`) // Al hacer referencia con el this, siempre hace referencia
                                                    // Al objeto el cual almacena a la funcion (en este caso, job)
        }
    }
}

let {name: name4 , job: {name: jobName} } = persona3 
console.log(name4)
console.log(jobName)

// Propagacion
console.log("\n---- Propagacion (Arrays) ----")

let myArray2 =  [... myArray, 5, 6] // Copia del array
// let myArray2 =  myArray -> Haciendo REFERENCIA al array, NO una copia

let myArray3 = [... myArray]

console.log(myArray2)
console.log(myArray3)

// Combinacion de arrays
console.log("\n--- Combinacion de arrays ---")

let myArray4 = [...myArray , ... myArray2, ...myArray3] // ... -> Operador de combinacion/propagacion
console.log(myArray4)

// Combinacion de objetos
console.log("\n--- Combinacion de objetos ---")

let persona4 = {... persona, email: "luis@gmail.com"}
console.log(persona4)

let persona5 = {... persona}
console.log(persona5)
