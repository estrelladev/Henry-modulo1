// Clase 8 de ECMAScript: Rest y Spread

// 1. Contexto sobre rest y spread en JavaScript
/*
Rest y spread son características introducidas en ECMAScript 6 que facilitan la manipulación de arrays y objetos de una manera más flexible y concisa.

- Rest permite recoger el resto de elementos de un array o propiedades de un objeto en una variable.
- Spread permite expandir elementos de un array o propiedades de un objeto en otro lugar, como al pasar argumentos a una función o al construir nuevos arrays y objetos.
*/

// 2. Ejemplos y explicación de rest y spread

// Ejemplo de rest con arrays
const numeros = [1, 2, 3, 4, 5];

const [primerNumero, segundoNumero, ...restoNumeros] = numeros;

console.log(primerNumero); // 1
console.log(segundoNumero); // 2
console.log(restoNumeros); // [3, 4, 5]

// Ejemplo de rest con objetos
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Barcelona",
  profesion: "Ingeniera",
};

const { nombre, edad, ...datosExtra } = persona;

console.log(nombre); // Ana
console.log(edad); // 25
console.log(datosExtra); // { ciudad: 'Barcelona', profesion: 'Ingeniera' }

// Ejemplo de spread con arrays
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const numerosCombinados = [...numeros1, ...numeros2];

console.log(numerosCombinados); // [1, 2, 3, 4, 5, 6]

// Añadiendo nuevos elementos con spread
const numerosExtendidos = [...numeros1, 100, ...numeros2];

console.log(numerosExtendidos); // [1, 2, 3, 100, 4, 5, 6]

// Ejemplo de spread con objetos
const personaBase = {
  nombre: "Juan",
  edad: 30,
};

const detallesPersona = {
  ciudad: "Madrid",
  profesion: "Desarrollador",
};

const personaCompleta = { ...personaBase, ...detallesPersona };

console.log(personaCompleta);
/*
Imprime:
{
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid',
  profesion: 'Desarrollador'
}
*/

// Modificando propiedades con spread
const personaActualizada = { ...personaBase, edad: 31 };

console.log(personaActualizada);
/*
Imprime:
{
  nombre: 'Juan',
  edad: 31
}
*/
