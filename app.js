const colors = require('colors');
console.log("Bienvenidos a la primera practica")
const uniforme = (x,k)=>{

    let prob= Number((x/k).toFixed(4))
    return {uniforme}
}
const suma =(a,b) =>{

    return a+b
}


console.log("Hola")
console.log("Este console es para mostrar el uso del push")

console.log(`La probabilidad calculada es: `+`${uniforme(3,6).prob}`.green)
const { Calculadora } = require('./clases/calculadora');
console.log("Esta seccion es de la calculadora")
const calculadora = new Calculadora();
console.log(calculadora.getCont())
const calculadora2 = new Calculadora();
console.log(calculadora2.getCont(),calculadora2.edad)
