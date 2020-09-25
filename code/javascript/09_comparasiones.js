var docente = {
    nombre: 'Jonathan',
    apellido: 'Almeida'
}

var docente2 = {
    nombre: 'Guillermo',
    apellido: 'Pizarro'
}

// Asignación por paso de valor
var otroDocente = {
    ... docente
}

console.log( docente == docente2 )
// False debido a que so objetos diferentes. Tienen diferenre dirección de memoria
console.log( docente == otroDocente )

console.log( otroDocente.nombre )

//Esta asignación es por referencia
docente3 = otroDocente
otroDocente.nombre = 'Luis'

// True debido a que es el mismo objeto. Tienen la misma dirección de memoria
console.log( docente3 == otroDocente )
console.log( docente3 )
console.log( docente )


