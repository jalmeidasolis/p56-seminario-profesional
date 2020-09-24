var estudiante = {
    nombre: 'Jonathan',
    apellido: 'Almeida',
    trabajo: 'UPS',
    correo: 'asdfg@gmail.com'

}
var estudiante2 ={
    nombre: 'Gabriel',
    apellido: 'Ochoa',
    trabajo: 'Austro',
    correo: 'gochoa@austro.com'
 
}

function imprimirNombreMayuscula(objeto){
    var { nombre } = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido}`)
}

function imprimirNombreMinuscula(objeto){
    var { nombre } = objeto
    console.log(`${nombre.toLowerCase()} ${objeto.apellido}`)
}

function imprimirApellidoMayuscula(objeto){
       console.log(`${objeto.nombre} ${objeto.apellido.toUpperCase()}`)
}

function imprimirApellidoMinuscula(objeto){
    console.log(`${objeto.nombre.toLowerCase()} ${objeto.apellido.toLowerCase()}`)
}


imprimirNombreMayuscula(estudiante)
imprimirNombreMinuscula(estudiante2)
imprimirApellidoMayuscula(estudiante)
imprimirApellidoMinuscula(estudiante2)