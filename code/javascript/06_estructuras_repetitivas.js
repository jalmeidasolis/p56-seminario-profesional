let estudiante = {
    nombres: 'Jonathan Jolao',
    apellidos: 'Almeida Solis',
    correoelectronico: 'jalmeidasolis@gmail.com',
    peso: 150,
}

//CONSTANTES QUE NO VAN A CAMBIAR
const INCREMENTAR_PESO = 3
const DECREMENTAR_PESO = 2

//FUNCION NO VA A CAMBIAR
const aumentarPeso = ( objeto ) => objeto.peso += INCREMENTAR_PESO
const disminuyePeso = ( objeto ) => objeto.peso -= DECREMENTAR_PESO

const comemucho = () => Math.random() < 0.5
const realizaDeporte = () => Math.random() < 0.7


//VARIABLE/CONSTANTE QUE NO VA A CAMBIAR
const META = estudiante.peso - 10

console.log(`Al inicio del año ${estudiante.nombre} pesa ${estudiante.peso}.`)

while( estudiante.peso > META ){
    if(comemucho()){
        aumentarPeso( estudiante )
    }
    if(realizaDeporte()){
        disminuyePeso( estudiante )
    }
}

console.log(`Al final del año ${estudiante.nombre} pesa ${estudiante.peso}.`)