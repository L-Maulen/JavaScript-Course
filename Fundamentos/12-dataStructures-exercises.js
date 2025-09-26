// 1. Crea un array que almacene cinco animales
const animales = ["Perro", "Gato", "Leon", "Gallina", "Pato"]
console.log("Lista original:")
console.log(animales)
console.log()

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Cocodrilo")
animales.push("Ardilla")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
console.log("\n3.- Eliminando el animal de la tercera posicion\n")
console.log(animales.splice(3,1))
console.log(animales)

// 4. Crea un set que almacene cinco libros

let setPractica = new Set(["Harry Potter","El señor de los anillos","El principito","1984","Cien años de soledad"])
console.log("\nEjercicio 4.- Set original:")
console.log(setPractica)

// 5. Añade dos más. Uno de ellos repetido
console.log("\n5.- Añadiendo 2 libros mas (uno duplicado)")

setPractica.add("Los Juegos del Hambre")
setPractica.add("Harry Potter")
console.log(setPractica)

// 6. Elimina uno concreto a tu elección
console.log("\n6.- Eliminando un libro a eleccion:")

let libroEliminar = "1984"

console.log("Libro a eliminar:",libroEliminar)

setPractica.delete(libroEliminar)
console.log(setPractica)

// 7. Crea un mapa que asocie el número del mes a su nombre
const mapMeses = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])

console.log("7.- Mapa que asocia numeros del mes con su nombre:\n", mapMeses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("8.- Comprobar si existe el mes numero 5 en el Map.\n")


if(mapMeses.has("5")){ // Es sensible al tipo de dato, supongo que internamente utiliza el comparador "==="
    console.log(`Contiene el mes numero 5, su valor es: ${mapMeses.get("5")}`)
} else{
    console.log("El map no contiene el mes numero 5 o su valor esta mal ingresado")
}


// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapMeses.set("Meses de verano",["Diciembre","Enero","Febrero"])
console.log("9.- Añadiendo clave con valor de un array:\n", mapMeses)

