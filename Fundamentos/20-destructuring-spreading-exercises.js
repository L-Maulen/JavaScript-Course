// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("1.-")

let arreglo = [9012, "HOli", "No", false, 41.79]

let [elemento1, elemento2] = arreglo
console.log("Primer elemento del array: " + elemento1)
console.log("Segundo elemento del array: " + elemento2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("\n2.-")

let [, , , , , elemento6 = "No existo en el original"] = arreglo

console.log("Valor predeterminado: " + elemento6)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("\n3.-")

let objeto1 = {
    nombre: "Andy",
    edad: 23,
    deporte: "Voleibol",
    
    jugar: function(){
        console.log("Estoy jugando voleibol ...")
    }
}

let {nombre, edad} = objeto1

console.log(nombre)
console.log(edad)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("\n4.-")

let {nombre: suNombre, edad: suEdad} = objeto1

console.log(suNombre)
console.log(suEdad)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("\n5.-")

let objeto2 = {
    name: "Luis",
    edad: 21,
    alias: "Luxo",

    walk: function(){
        console.log("Esta persona está caminando")
    },

    job: {
        name: "Administrador",
        exp: 2,
        work: function(){
            console.log(`Esta persona lleva ${this.exp} años como ${this.name}`) // Al hacer referencia con el this, siempre hace referencia
                                                    // Al objeto el cual almacena a la funcion (en este caso, job)
        }
    }
}

let { job: {name: nombreCargo}, job: {exp: experiencia} } = objeto2

console.log(nombreCargo)
console.log(experiencia)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("\n6.-")

let arreglo1 = [123,41,"OI", true]
let arreglo2 = [9/12, ["Hola", "Mundo"], false]

let arregloConjunto = [... arreglo1, ...arreglo2] 
console.log(arregloConjunto)

// 7. Usa propagación para crear una copia de un array
console.log("\n7.-")

let arregloCopia = [... arreglo1]
console.log(arregloCopia)
console.log(arreglo1)

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("\n8.-")


let conjuntoObjetos = {...objeto1, ...objeto2}

console.log(conjuntoObjetos)

// 9. Usa propagación para crear una copia de un objeto
console.log("\n9.-")

let copiaObjeto = {...objeto1}
console.log(copiaObjeto)
console.log(objeto1)


// 10. Combina desestructuración y propagación
console.log("\n10.-")


