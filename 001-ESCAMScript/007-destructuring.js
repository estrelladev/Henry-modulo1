// Clase 7 de ECMAScript: Destructuring (Desestructuración)

// 1. Contexto sobre destructuring en JavaScript
/*
La desestructuración es una característica de JavaScript que permite descomponer una estructura de datos, como un objeto o un array, en partes más pequeñas y asignarlas a variables individuales de manera más conveniente. Esto simplifica la extracción de valores de estructuras complejas y mejora la legibilidad del código.
*/

// 2. Ejemplos y explicación de destructuring con objetos y arrays

// Ejemplo de destructuring con objetos
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

// Extrayendo propiedades individuales
const { nombre, edad } = persona;
console.log(nombre); // Juan
console.log(edad); // 30

// Renombrando propiedades durante la extracción
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona); // Juan
console.log(edadPersona); // 30

// Destructuring anidado con objetos
const usuario = {
  username: "juanito",
  datosPersonales: {
    nombre: "Juan",
    edad: 30,
  },
};

const {
  username,
  datosPersonales: { nombre: nombreUsuario, edad: edadUsuario },
} = usuario;
console.log(username); // juanito
console.log(nombreUsuario); // Juan
console.log(edadUsuario); // 30

// Ejemplo de destructuring con arrays
const colores = ["rojo", "verde", "azul"];

// Extrayendo elementos individuales
const [color1, color2, color3] = colores;
console.log(color1); // rojo
console.log(color2); // verde
console.log(color3); // azul

// Ignorando elementos del array
const [primero, , tercero] = colores;
console.log(primero); // rojo
console.log(tercero); // azul
