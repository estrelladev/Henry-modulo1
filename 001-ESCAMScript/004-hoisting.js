// Clase 4 de ECMAScript: Hoisting

// 1. Contexto sobre hoisting en JavaScript
/*
Hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones son movidas (pero no sus inicializaciones) al inicio de su ámbito antes de que se ejecute el código. Esto significa que se puede usar una variable o función antes de que se haya declarado explícitamente en el código.
*/

// 2. Ejemplos y explicación de hoisting con variables y funciones

// Ejemplo de hoisting con variables (usando var)
console.log(mensaje); // undefined
var mensaje = "Hola, mundo!"; // La declaración es movida al inicio

// Equivalente a:
// var mensaje;
// console.log(mensaje); // undefined
// mensaje = "Hola, mundo!";

// Ejemplo de hoisting con funciones (declaración de función)
saludar(); // Hola, amigo!

function saludar() {
  console.log("Hola, amigo!");
}

// Equivalente a:
// function saludar() {
//   console.log("Hola, amigo!");
// }
// saludar();

// Ejemplo de hoisting con funciones expresadas (asignación de función)
// La asignación de funciones expresadas no se eleva como las declaraciones de función
despedirse(); // Error: despedirse is not a function

var despedirse = function () {
  console.log("Adiós, amigo!");
};

// Equivalente a:
// var despedirse;
// despedirse(); // Error: despedirse is not a function
// despedirse = function() {
//   console.log("Adiós, amigo!");
// };

// Ejemplo de hoisting con let y const (no se elevan)
console.log(edad); // Error: Cannot access 'edad' before initialization
let edad = 30;

// Equivalente a:
// console.log(edad); // Error: Cannot access 'edad' before initialization
// let edad = 30;
