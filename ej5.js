const prompt = require("prompt-sync")();

let temperaturaFarenheit = prompt("Ingresa la temperatura en Farenheit:");
function farenheitACelsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}
let temperaturaCelsius = farenheitACelsius(temperaturaFarenheit);
console.log("La temperatura en Celsius es:", temperaturaCelsius);