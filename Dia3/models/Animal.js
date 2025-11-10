// Clase base o superclase
class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }

    //Metodos -> Funcionalidades
    hablar(){
        console.log(`Soy un animal llamadado ${this.nombre} que habla`)
    }
}

module.exports = Animal;