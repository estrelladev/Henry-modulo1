// Clase 6 de ECMAScript: Template Literals y Escape Sequences

// 1. Contexto sobre template literals y escape sequences en JavaScript
/*
Template literals permiten incrustar expresiones dentro de literales de cadena utilizando la sintaxis de comillas francesas (` `). Esto facilita la creación de cadenas de texto complejas de manera más legible y con menos concatenación manual. Las escape sequences son secuencias de caracteres que representan caracteres especiales dentro de cadenas de texto, como saltos de línea o caracteres de escape.
*/

// 2. Ejemplos y explicación de template literals y escape sequences

// Ejemplo básico de template literals
const nombre = "María";
const edad = 25;

const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // Imprime: Hola, me llamo María y tengo 25 años.

// Multilínea con template literals
const parrafo = `
  Este es un ejemplo
  de un párrafo
  que ocupa varias líneas.
`;
console.log(parrafo);
/*
Imprime:
Este es un ejemplo
de un párrafo
que ocupa varias líneas.
*/

// Escape sequences en strings
const textoConEscape =
  "Texto con caracteres especiales: \n Nueva línea \t Tabulación";
console.log(textoConEscape);
/*
Imprime:
Texto con caracteres especiales:
Nueva línea    Tabulación
*/

// Uso de backticks en strings normales (no se interpretan como template literals)
const mensajeConBackticks = `El uso de \`backticks\` dentro de comillas francesas no causa conflicto.`;
console.log(mensajeConBackticks); // Imprime: El uso de `backticks` dentro de comillas francesas no causa conflicto.
