const Animal = require("./models/Animal")
const Perro = require("./models/Perro")
let perro = new Perro("Nous");
perro.hablar();
console.log(perro.nombre);