// 1. Crea una clase que reciba dos propiedades
console.log("1.-")
class ClaseGeneral{

    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    // Ejercicio 2
    detalles(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }

    // Ejercicio 4
    static saludar(){
        console.log("Hola, te saluda el metodo estatico")
    }

}

let objeto1 = new ClaseGeneral("Jaime", 30)
console.log(objeto1)
console.log(typeof objeto1)

// 2. Añade un método a la clase que utilice las propiedades
console.log("\n2.- ")

let ej2 = new ClaseGeneral("Andy", 24)
ej2.detalles()

// 3. Muestra los valores de las propiedades e invoca a la función
console.log("\n3.-")

console.log(ej2.nombre)
console.log(ej2.edad)


// 4. Añade un método estático a la primera clase
console.log("\n4.- ")

// 5. Haz uso del método estático
console.log("\n5.- ")

ClaseGeneral.saludar()

// 6. Crea una clase que haga uso de herencia
console.log("\n6.- ")

class Animal{

    constructor(nombre, edad, cantPatas, vuela){
        this.nombre = nombre
        this.edad = edad
        this.cantPatas = cantPatas
        this.vuela = vuela
    }

    detalles(){
        console.log(`--- ANIMAL ---\nnombre: ${this.nombre} - edad: ${this.edad} - vuela: ${this.vuela}`)
    }

}

class Gato extends Animal{
    constructor(nombre, edad, cantPatas, vuela,colores){
        super(nombre, edad, cantPatas, vuela)
        this.colores = colores
    }    
    

    // Ejercicio 10
    detalles(){
        super.detalles()
        console.log(`-- GATO --\ncolores: ${this.colores}`)
    }

}

let gato1 = new Gato("Roberto",13, 4,false,"Naranja y blanco")
console.log(gato1)

// 7. Crea una clase que haga uso de getters y setters
console.log("\n7.- ")

class Clase7{
    #numTelefono
    #direccion
    #numBanco

    constructor(numTelefono, direccion, numBanco){
        this.#numTelefono = numTelefono
        this.#direccion = direccion
        this.#numBanco = numBanco
    }

    get numTelefono(){
        return this.#numTelefono
    }

    get direccion(){
        return this.#direccion
    }

    get numBanco(){
        return this.#numBanco
    }


    set numTelefono(nuevoTelefono){
        this.#numTelefono = nuevoTelefono
    }

    set direccion(nuevaDireccion){
        this.#direccion = nuevaDireccion
    }

    set numBanco(nuevoBanco){
        this.#numBanco = nuevoBanco
    }

}


// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
console.log("\n8 y 9.- ")

let objt7 = new Clase7(978654, "No tiene", null)

console.log(objt7.numTelefono)
console.log(objt7.direccion)
console.log(objt7.numBanco)
console.log("--- Cambiando los atributos ---")

objt7.direccion = "Los robles, 132"
objt7.numBanco = 991
objt7.numTelefono = 90876

console.log(objt7.numTelefono)
console.log(objt7.direccion)
console.log(objt7.numBanco)



// 10. Sobrescribe un método de una clase que utilice herencia 
console.log("\n10.- ")
gato1.detalles()


