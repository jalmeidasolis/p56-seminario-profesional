var nombreApellido = 'Jonathan Almeida'
var edad = 37

//FUNCION TIPO DECLARATIVA
function imprimirEdad(nombre, edad) {
    console.log(nombre, 'tiene la edad de: ', edad)

}

//FUNCION TIPO FLECHA 
var imprimirEdad2 = (nombre, edad) => {
console.log(nombre, 'tiene la edad de: ', edad)
}

//FUNCION TIPO EXPRESIVA
var imprimirEdad3 = function(nombre, edad)  {
    console.log(nombre, 'tiene la edad de: ', edad)
}

imprimirEdad(nombreApellido, edad)
imprimirEdad('Miguel Alvarado', 30)
imprimirEdad2(nombreApellido, edad)
imprimirEdad3('Sofía Mena', 15)

