const prompt = require("prompt-sync")();

let numeroDivisible = prompt("Ingresa un número:");
function esDivisiblePor5(numero) {
  return numero % 5 === 0;
}