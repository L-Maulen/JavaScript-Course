// Clases

console.log("---- CLASES -----")

class Persona {

    constructor(name, edad, alias){
        this.name = name
        this.edad = edad
        this.alias = alias
    }
    // Nos permite definir la estructura inicial de la clase
}

// Sintaxis
let persona1 = new Persona("Luis", 21, "Lusho")
let persona2 = new Persona("Leo", 43, "Jarod")

console.log(persona1)
console.log(persona2)

console.log(typeof persona1)

// Valores por defecto
console.log("\n--- Valores por defecto al objeto ---")


class defaultPersona {

    constructor(name = "Nombre Predeterminado", edad = 0, alias= "Sin alias"){
        this.name = name
        this.edad = edad
        this.alias = alias
    }
}

let defPersona = new defaultPersona("Luis") // Aunque intente declarar su alias, en las clases, se definen los parametros por orden
console.log(defPersona)


// Acceso a sus propiedades
console.log("\n--- Accediendo a las propiedades de un objeto ---")

console.log(defPersona.alias) // Igual que con los objetos
console.log(defPersona["alias"])

defPersona.alias = "LuisDev"

console.log(defPersona.alias) // Igual que con los objetos
console.log(defPersona["alias"])

// Funciones en clases
console.log("\n--- Funciones de las clases ---")

class Persona2 {

    constructor(name, edad, alias){
        this.name = name
        this.edad = edad
        this.alias = alias
    }

    caminar(){
        console.log("Esta persona camina.")
    }

}


let persona3 = new Persona2("Luxx", 21,"lusho")
persona3.caminar()

// Propiedades / atributos privados
console.log("\n---- Propiedades / atributos privados ----")

class PrivPersona {

    #bank // Hago privado el atributo bank, solo la clase puede hacer cosas con el

    constructor(name, edad, alias, bank){
        this.name = name
        this.edad = edad
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }

}

let persona5 = new PrivPersona("Persona 5", 24, "NN", "112")
console.log(persona5.bank) // No se puede acceder

// Pero, podemos editarla¿?
persona5.bank = "DWQHVJKEQC" // bank NO ES #bank
console.log(persona5)

// NO, lo que hace es crear OTRA propiedad que tambien (en el caso de arriba) se llama 'bank'

// Metodos Getters y Setters
console.log("\n---- Metodos Getters y Setters ----")

class PrivPersona2 {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name // Metodo para lectura del atributo
    }

    get bank(){
        return this.#bank // Metodo para lectura del atributo
    }

    set bank(newBank){
        this.#bank = newBank
    }


}

let persona6 = new PrivPersona2("Nombre",33,"ALIAS", "09991A")
console.log(persona6.name) // Gracias al metodo get, puedo leer lo que contiene el atributo / propiedad
console.log(persona6.bank)

persona6.bank = "NUEV0num"
console.log(persona6.bank)

// Herencia
console.log("\n----- HERENCIA -----")

class Animal{

    constructor(nombre){
        this.nombre = nombre
    }

    sonido(){
        console.log("El animal emite un sonido.")
    }

}

class Perro extends Animal{

    sonido(){ // Sobreescribiendo el metodo
        // super.sonido() -> Llamar a el metodo del padre
        console.log("Guau")
    }

    correr(){
        console.log("El perro corre.")
    }

}

class Pescado extends Animal{

    constructor(nombre, tamanno){
        super(nombre) // Llamamos a instanciar segun el constructor del padre
        this.tamanno = tamanno
    }

    nadar(){
        console.log("El pescado esta nadando")
    }

}


let miPerro = new Perro("Ricardo")
miPerro.correr()
miPerro.sonido()

console.log()

let pez = new Pescado("Peskadit0", 10)
pez.sonido()
pez.nadar()

// Metodos estaticos
console.log("\n--- Metodos estaticos ---")

class OperacionesMatematicas{

    static sum(a, b){ // Ahora podemos llamar a la funcion SIN instanciar la clase
        return a + b
    }
}

console.log(OperacionesMatematicas.sum(1,6))
//let miClase = new OperacionesMatematicas -> NO es necesario
