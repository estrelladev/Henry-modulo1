// Clase 2 de ECMAScript: Let y Const

// 1. Contexto sobre let y const en ECMAScript
/*
ECMAScript 6 introdujo dos nuevas formas de declarar variables: let y const.
Estas son alternativas a la declaración var que existía en versiones anteriores de JavaScript.
La principal diferencia entre let y const radica en la mutabilidad de las variables:
- let permite que una variable sea reasignada.
- const crea una variable de solo lectura cuyo valor no puede ser reasignado una vez inicializado.
*/

// 2. Ejemplos y explicación de let y const

// Ejemplo con let
let edad = 30;
console.log("Edad inicial:", edad);

edad = 31; // Reasignación válida con let
console.log("Edad actualizada:", edad);

// Ejemplo con const
const nombre = "María";
console.log("Nombre:", nombre);

// Intentar reasignar una constante dará un error:
// nombre = "Ana"; // Esto daría un error en tiempo de ejecución

// Sin embargo, los objetos y arrays declarados con const sí pueden cambiar internamente:
const persona = {
  nombre: "Juan",
  edad: 25,
};
console.log("Persona inicial:", persona);

persona.edad = 26; // Modificación válida en un objeto const
console.log("Persona actualizada:", persona);

// Array inicializado con const también puede modificar sus elementos:
const colores = ["rojo", "verde", "azul"];
console.log("Colores iniciales:", colores);

colores.push("amarillo"); // Esto es válido
console.log("Colores actualizados:", colores);

// Intentar asignar un nuevo array a la variable constante dará un error:
// colores = ["blanco", "negro"]; // Esto daría un error en tiempo de ejecución
