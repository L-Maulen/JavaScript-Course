// 1. Crea un objeto con 3 propiedades

let laptop = {
    marca: "Lenovo",
    procesador: "AMD",
    garantia: false
    
}

// 2. Accede y muestra su valor
console.log("2.-")

for(let valor in laptop){
    console.log(valor +": "+ laptop[valor])
}


// 3. Agrega una nueva propiedad
console.log("\n3.- ")

laptop["Almacenamiento"] = 512  

console.log(laptop)

// 4. Elimina una de las 3 primeras propiedades
console.log("\n4.- ")

delete laptop.procesador
console.log(laptop)

// 5. Agrega una función e invócala
console.log("\n5.- ")

laptop["apagar"] = function(){
    console.log("La laptop esta apagada.")
}

laptop.apagar()

// 6. Itera las propiedades del objeto
console.log("\n6.- ")

for(let value in laptop){
    console.log(value)
}


// 7. Crea un objeto anidado
console.log("\n7.- ")

let telefono = {
    nombre: "Galaxy S25 Ultra",
    memoria: 512,
    gama: "Alta",
    marca:{
        nombre: "Samsung",
        paisOrigen: "Corea del Sur"
    }
}

console.log(telefono)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("\n8.- ")

console.log("Propiedades anidadas:")
console.log(telefono.marca.nombre)
console.log(telefono.marca.paisOrigen)

// 9. Comprueba si los dos objetos creados son iguales
console.log("\n9.-")
console.log(telefono === laptop)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("\n10.-")
console.log(laptop.Almacenamiento == telefono.memoria)

