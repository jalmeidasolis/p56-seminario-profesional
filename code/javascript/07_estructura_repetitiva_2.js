var contador = 0

const avanzar = () => {
    numero = Math.random()
    console.log( numero )
    resultado = numero <0.5
    return resultado
}

do {
    contador++
} while( !avanzar() )

if ( contador == 1 ){
    console.log( `Se avanzó ${contador} vez.` )
} else {
    console.log( `Se avanzó ${contador} veces.` )

}