var person = {
    nombre: 'Jonathan',
    apellido: 'Almeida',
    edad: '23',
    universidad: 'Universidad Politécnica Salesiana',
    correoelectronico: 'jalmeidas@est.ups.edu.ec',
    ingeniero: true,
    master: false,
    doctor: false
}

function imprimirPersona( objeto ) {
    console.log( `${objeto.nombre} ${objeto.apellido}` )
    console.log( `Edad: ${objeto.edad} años.` )
    console.log( `Universidad: ${objeto.universidad}` )
    console.log( `Correo Electronico: ${objeto.correoelectronico}` )
    if(objeto.ingeniero){
        console.log(` Es Ingeniero `)
    }
    if(objeto.master){
        console.log(` Es Master `)
    }
    if(objeto.doctor){
        console.log(` Es Doctor `)
    }
}

imprimirPersona( person )
