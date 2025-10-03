// Objetos
// Todo dato en javascript que no es primitivo, es un Objeto

// Un objeto es una coleccion de propiedades

// Sintaxis

let persona = {
    name: "Luis",
    edad: 21,
    alias: "Luxo"
}

// Los objetos contienen propiedades, funciones, otros objetos, etc

// Acceder a las propiedades

// Notacion punto
console.log("--- Accediendo a una propiedad con un punto ---")
console.log(persona.name)


// Notacion de corchetes
console.log("\n--- Accediendo a una propiedad con corchetes ---")
console.log(persona["name"]) // La "llave" debe estar entre comillas


// Modificando datos de un objeto
console.log("\n--- Cambiando datos del objeto ---")

persona.name = "Luisillo"
console.log("Nuevo nombre del objeto:", persona.name)

console.log("\nCambiando el tipo de dato de la edad ...")
console.log(typeof persona.edad )
persona.edad = "21"
console.log("Nueva 'edad' del objeto:", persona.edad)
console.log(typeof persona.edad )


// Eliminar propiedades de un objeto
console.log("\n--- Eliminando propiedades del objeto ---")

delete persona.edad

console.log(persona)


// Agregar propiedades de un objeto
console.log("\n--- Agregando propiedades al objeto ---")

persona.email = "luis@gmail.com"
persona["edad"] = 21 

console.log(persona)


// Metodos o funciones en los objetos
console.log("\n---- Creando objetos con funciones ----")

let persona2 = {
    name: "Luis",
    edad: 21,
    alias: "Luxo",

    walk: function(){
        console.log("Esta persona está caminando")
    }

}

persona2.walk()


// Anidando objetos
console.log("\n---- Anidando objetos ----")

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

console.log(persona3.name)
console.log(persona3.job)
persona3.job.work()


// Igualdad de objects
console.log("\n---- Igualdad de objects ----")

let persona4 = {
    name: 'Luisillo', 
    alias: 'Luxo', 
    email: 'luis@gmail.com', 
    edad: 21
}

// console.log(persona == persona4)
console.log(persona === persona4) // Los objetos se guardan en una direccion de memoria distinta, por lo tanto no son iguales
// Ya que se compara la direccion de memoria de los datos, no su valor (aunque sean iguales)
// Habria que comparar propiedad por propiedad

console.log(persona.name == persona4.name)


// Iteracion de un objeto
console.log("\n---- Iterando un objeto ----")

for(let value in persona4){
    console.log(value)
}

// Cuando iteramos, accedemos a las claves del objeto
console.log()

for(let clave in persona4){
    console.log(clave+ ": " + persona4[clave])
}


// Funciones como Objetos
console.log("\n---- Funciones como Objetos ----")


function Person(name, edad){ // Deberia ser una clase, no es una buena practica crear objetos asi
    this.name = name
    this.edad = edad
}

let persona5 = new Person("luis", 21) //
console.log(persona5)
console.log(typeof persona5)
console.log(typeof persona4)