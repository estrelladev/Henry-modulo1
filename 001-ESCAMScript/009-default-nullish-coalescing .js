// Clase 9 de ECMAScript: Default Assignment y Nullish Coalescing

// 1. Contexto sobre Default Assignment y Nullish Coalescing en JavaScript
/*
Default Assignment (Asignación por defecto) y Nullish Coalescing (Coalescencia nula) son características introducidas en ECMAScript que proporcionan formas convenientes de manejar valores predeterminados y valores nulos o indefinidos de manera segura.
*/

// 2. Ejemplos y explicación de Default Assignment y Nullish Coalescing

// Ejemplo de Default Assignment con funciones
function saludar(nombre = "Invitado") {
  console.log(`Hola, ${nombre}!`);
}

saludar(); // Hola, Invitado!
saludar("Juan"); // Hola, Juan!

// Ejemplo de Default Assignment con destructuring
const { color = "rojo", tamaño = "grande" } = {};

console.log(color); // rojo
console.log(tamaño); // grande

// Ejemplo de Nullish Coalescing (??)
const nombreUsuario = "";

const nombreMostrar = nombreUsuario ?? "Usuario Anónimo";

console.log(nombreMostrar); // Usuario Anónimo

// Nullish Coalescing vs. || (OR lógico)
const nombreCompleto = nombreUsuario || "Usuario Desconocido";

console.log(nombreCompleto); // Usuario Desconocido (incorrecto si nombreUsuario es "")

const nombreCompletoNullish = nombreUsuario ?? "Usuario Desconocido";

console.log(nombreCompletoNullish); // "" (correcto)

// Nullish Coalescing con objetos
const opciones = {
  color: "",
  tamaño: "mediano",
};

const colorSeleccionado = opciones.color ?? "rojo";
const tamañoSeleccionado = opciones.tamaño ?? "grande";

console.log(colorSeleccionado); // ""
console.log(tamañoSeleccionado); // mediano
