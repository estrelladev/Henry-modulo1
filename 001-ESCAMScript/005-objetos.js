// Clase 5 de ECMAScript: Objetos.

// 1. Contexto sobre objetos en JavaScript
/*
En JavaScript, un objeto es una forma conveniente de definir un nuevo objeto mediante la asignación de pares clave-valor entre llaves {}. Esto permite crear objetos de manera más clara y concisa, sin necesidad de utilizar el constructor Object o declaraciones detalladas de propiedades.
*/

// 2. Ejemplos y explicación de object literals

// Ejemplo básico de un objeto persona
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

console.log(persona); // Imprime: { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }

// Acceso a las propiedades del objeto
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30

// Agregar nuevas propiedades dinámicamente
persona.profesion = "Ingeniero";
console.log(persona); // Imprime: { nombre: 'Juan', edad: 30, ciudad: 'Madrid', profesion: 'Ingeniero' }

// Ejemplo con métodos en el objeto
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  detalles: function () {
    return `${this.marca} ${this.modelo} del año ${this.año}`;
  },
};

console.log(coche.detalles()); // Imprime: Toyota Corolla del año 2022

// Ejemplo con propiedades computadas (introducido en ES6)
const tipoDeDato = "color";

const fruta = {
  nombre: "Manzana",
  [tipoDeDato]: "rojo",
};

console.log(fruta); // Imprime: { nombre: 'Manzana', color: 'rojo' }
