console.log("Goodbye World");

// 1. Contexto sobre qué es ECMAScript
/*
ECMAScript (también conocido como ES) es la especificación estándar de JavaScript. Define la sintaxis, los tipos de datos, las estructuras de control y otros elementos fundamentales que un lenguaje de programación debe tener para ser considerado JavaScript. La especificación ECMAScript es mantenida por ECMA International y se actualiza regularmente para introducir nuevas características y mejoras en el lenguaje.
*/

// 2. Nuevas features que ofrece JavaScript a partir de ECMAScript
/*
ECMAScript 6, lanzado en 2015, introdujo muchas nuevas características poderosas a JavaScript, tales como:
- Arrow Functions
- Template Literals
- Let y Const (bloque de ámbito)
- Destructuring
- Clases
- Módulos
- Promesas
- Operador de propagación (Spread Operator)
- y mucho más.
Estas características han mejorado significativamente la forma en que se escribe JavaScript, haciéndolo más legible, mantenible y poderoso.
*/

// 3. Demostración de cómo estas features se pueden utilizar en la programación del día a día
// Ejemplo de uso de algunas características de ES6:

// Arrow Functions
const square = (x) => x * x;

// Template Literals
const name = "Juan";
console.log(`Hola, ${name}!`);

// Let y Const
let counter = 0;
const max = 10;
while (counter < max) {
  console.log(counter);
  counter++;
}

// Clases
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}.`);
  }
}

const persona1 = new Persona("Ana");
persona1.saludar();

// Promesas
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos recibidos");
    }, 2000);
  });
};

fetchData().then((data) => {
  console.log(data);
});

// 4. Introducción a ChatGPT y cómo acceder a él
/*
ChatGPT es un modelo de lenguaje desarrollado por OpenAI que puede generar respuestas coherentes y contextuales a partir de textos de entrada. Puedes interactuar con ChatGPT a través de diversas plataformas, como aplicaciones web o integraciones en programas. Para acceder a ChatGPT, visita el sitio web de OpenAI (openai.com) y explora las opciones disponibles para la interacción con el modelo.
*/
