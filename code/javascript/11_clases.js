//Para heredar
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype

    //Aqui obtengo los prototipos del padre (a traves de fn)
    prototipoHijo.prototype = new fn
    //
    prototipoHijo.prototype.constructor = prototipoHijo
}

//Clase Padre
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

//Clase Hijo
function Deportista(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}



Deportista.prototype.saludar = function(){
    console.log(` Hola soy ${this.nombre} ${this.apellido} y soy deportista.` )

}


Persona.prototype.saludar = function() {
    console.log(` Hola soy ${this.nombre} ${this.apellido}.` )
}


Persona.prototype.soyAlto = function(){
    if(this.altura > 1.70){
    console.log(`Mi altura es ${this.altura} y soy alto.`)
} else {
    console.log(`Mi altura es ${this.altura} y NO soy alto.`)
}
}

heredaDe(Deportista, Persona)

var objeto1 = new Persona('Jonathan', 'Almeida', 1.63)
objeto1.saludar()
objeto1.soyAlto()

var objeto2 = new Deportista('Miguel', 'Alvarado', 1.80)
objeto2.saludar()
objeto2.soyAlto()