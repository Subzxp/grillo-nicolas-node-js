const prompt = require("prompt-sync")();

let string1 = prompt("Ingresa un string:");
let string2 = prompt("Ingresa otro string:");
let sonIguales = string1 === string2;
let mismaLongitud = string1.length === string2.length;
console.log("¿Los strings son iguales?", sonIguales);
console.log("¿Tienen la misma longitud?", mismaLongitud);