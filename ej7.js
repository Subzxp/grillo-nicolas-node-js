const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Ingresa un número:"));
let num2 = parseInt(prompt("Ingresa otro número:"));
if (num1 > num2) {
  console.log(num1 + " es mayor que " + num2);
} else if (num2 > num1) {
  console.log(num2 + " es mayor que " + num1);
} else {
  console.log("Ambos números son iguales.");
}