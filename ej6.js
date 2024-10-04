const prompt = require("prompt-sync")();

let angulo1 = parseInt(prompt("Ingresa el primer ángulo:"));
let angulo2 = parseInt(prompt("Ingresa el segundo ángulo:"));
let angulo3 = parseInt(prompt("Ingresa el tercer ángulo:"));
let sumaAngulos = angulo1 + angulo2 + angulo3;
let esTriangulo = sumaAngulos === 180;
console.log("¿Es un triángulo válido?", esTriangulo);