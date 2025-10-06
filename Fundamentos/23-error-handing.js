// Manejo de errores

// Una excepcion es un evento que interrumpe el flujo de la aplicacion 
// en caso de que se produzca

let myObject
//console.log(myObject.email) // Error, ya que la variable "myObject" no tiene dicha propiedad


// Try - Catch
console.log("\n---- Try - Catch ----")

try{
    // Codigo que intenta ejecutar
    console.log(myObject.email) // Esta linea produce un error y no ocurre lo de abajo, ya que se va al catch
    console.log("Finaliza la ejecucion")
} catch{
    console.log("Se ha producido un error")
}

// Capturar el error
console.log("\n--- Capturar el error ---")

try{
    // Codigo que intenta ejecutar
    console.log(myObject.email) // Esta linea produce un error y no ocurre lo de abajo, ya que se va al catch
    console.log("Finaliza la ejecucion")
} catch(error){
    // console.log("Se ha producido un error",error) // Ahora si muestra el mensaje (completo) de error
    console.log("Se ha producido un error:", error.message) // Muestra el mensaje de error mas acotado

}

// Finally
console.log("\n--- Finally ---")

try{
    // Codigo que intenta ejecutar
    //console.log(myObject.email) // Esta linea produce un error y no ocurre lo de abajo, ya que se va al catch
    console.log("Finaliza la ejecucion")
} catch(error){
    //console.log("Se ha producido un error:", error.message) // Muestra el mensaje de error mas acotado

} finally{ // Este codigo se ejecuta SIEMPRE, haya o no error
    console.log("Este codigo se ejecuta SIEMPRE")
}


// Lanzar errores
console.log("\n--- Lanzar excepcion ---")

// throw

//throw new Error("Se ha producido un error.")

function sumIntegers(a , b){
    // Se asegurara de que los datos ingresados sean ENTEROS

    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operacion solo suma enteros.")
    }

    if(!Number.isInteger(a) || !Number.isInteger(b)){ // 
        //console.log("Esta funcion solo suma numeros enteros.")
        throw new Error("Esta funcion solo suma numeros enteros.")
    }
    if(a == 0 || b == 0){
        throw new sumZeroIntegerError("Se esta intentando sumar ceros", a, b)
    }

    return a + b
}

try{
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers("5", 10))
} catch(error) {
    console.log("Se ha producido un error:", error.message)
}


// Capturar varios errores
console.log("\n--- Capturar varios errores ---")

try{
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch(error) {

    if(error instanceof TypeError){
        console.log("Se ha producido un error de tipo:", error.message)
    } else if(error instanceof Error){
        console.log("Se ha producido un error:", error.message)
    }

}

// Crear excepciones personalizadas
console.log("\n--- Crear excepciones personalizadas ---")

class sumZeroIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers(){
        console.log(this.a + " + " + this.b)
    }
}

try{
    console.log(sumIntegers(0, 10))
} catch(error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}
