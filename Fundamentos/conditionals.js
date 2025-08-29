/* CONDICIONALES o ESTRUCTURAS DE CONOTROL */

// IF - ELSE IF - ELSE

let age = 18

// if
if(age == 37){
    //Bloque de codigo
    console.log("La edad es:",age)
}

// else
if (age != 37){
    console.log("La edad no es 37")
} else{
    console.log("La edad es 37")
}


// else if
if (age == 37){
    console.log("La edad es 37")
} else if (age < 18){
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}


// Operador ternario
// Forma compacta de escribir un condicional simple (if - else)

// age == 37? console.log("La edad es 37"): console.log("La edad no es 37")

const mensaje = age == 37? "La edad es 37": "La edad no es 37"
console.log(mensaje)


// SWITCH

let day = 0
let dayName

switch(day){  // Dentro del parentesis va la variable que queremos evaluar/inspeccionar
    case 0: // Cada case es un posible valor de la variable
        dayName = "Lunes"
        break; // Al finalizar cada case, se debe poner un break para evitar que se ejecuten los demas casos
    case 1:
        dayName = "Martes"
        break;
    case 2:
        dayName = "Miercoles"
        break;
    case 3:
        dayName = "Jueves"
        break;
    case 4:
        dayName = "Viernes"
        break;  
    case 5:
        dayName = "Sabado"
        break;  
    case 6:
        dayName = "Domingo"
        break;
    default:    // El default se ejecuta si ningun case coincide con los casos anteriores
        dayName = "Numero de dia no valido"
        // No es necesario colocar el break, ya que no hay mas casos a ejecutar
} 

console.log(dayName)