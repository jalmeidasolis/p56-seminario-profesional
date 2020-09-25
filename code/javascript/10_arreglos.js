var objeto1 = {
    nombre: 'Jonathan',
    apellido: 'Almeida',
    altura: 170,
    cantidadLibros: 10,
}

var objeto2 = {
    nombre: 'Carla',
    apellido: 'Lopez',
    altura: 170,
    cantidadLibros: 10,
}

var objeto3 = {
    nombre: 'Rogger',
    apellido: 'Rubio',
    altura: 180,
    cantidadLibros: 20,
}

var objeto4 = {
    nombre: 'Miguel',
    apellido: 'Alvarado',
    altura: 150,
    cantidadLibros: 50,
}

var objeto5 = {
    nombre: 'Nury',
    apellido: 'Solis',
    altura: 160,
    cantidadLibros: 5,
}

var personas = [ objeto1, objeto2, objeto3, objeto4, objeto5 ]

// ------ 1ra Forma de recorrer arreglo ------
for (persona of personas) {
    console.log( `${persona.nombre} ${persona.apellido}` )
}

// ------ 2da Forma de recorrer arreglo ------
for (var i=0; i<personas.length; i++){
    console.log( ` ${personas[i].nombre} ${personas[i].apellido}`)
}

// ------ Filtrar con arreglos ------

const esAlta = (objeto) => objeto.altura >= 1.80
var personasAltas = personas.filter( esAlta )

console.log( personasAltas )
for (persona of personasAltas){
    console.log(`${persona.nombre} ${persona.apellido}`)
}

//------ Uso de la funcion map con arreglos (conversión) ------
//METROS
const pasarAlturasMetros = (objeto) => {
    objeto.altura = objeto.altura / 100
    return objeto
}

var personasMetros = personas.map( pasarAlturasMetros )

//Otra forma de ejecutar resultado
//CENTIMETROS
var personasCentimetros = personas.map( function(objeto) {
    objeto.altura = objeto.altura * 100
    return objeto
} )

//Modificar Arreglo
var otrasPersonas = []
for(persona of personas){
    otrasPersonas.push( { ...persona })
}

otrasPersonas.map(pasarAlturasMetros)

console.log( personas )
console.log( otrasPersonas )

//------ Contabilizar Libros en total ------

//1ra forma 
var sum = 0
for(persona of personas){
    sum += persona.cantidadLibros
}
console.log( `La cantidad de libros es ${sum}.` )


//2da forma
const contabilizarLibros = (acum, { cantidadLibros }) => acum + cantidadLibros

var totalLibros = personas.reduce( contabilizarLibros, 0 )
console.log( `La cantidad de libros en total es ${totalLibros}.` )

