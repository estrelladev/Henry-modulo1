// Clase 3 de ECMAScript: Ámbito (Scope)

// 1. Contexto sobre ámbito global y local en JavaScript
/*
En JavaScript, el ámbito se refiere al alcance de visibilidad que tienen las variables. Hay dos tipos principales de ámbito:
- Ámbito Global: Las variables declaradas fuera de cualquier función o bloque de código son globales y están disponibles en todo el script.
- Ámbito Local: Las variables declaradas dentro de una función o bloque de código (por ejemplo, usando let o const) son locales y solo están disponibles dentro de ese contexto específico.
*/

// 2. Ejemplos y explicación de ámbito global y local

// Ejemplo de ámbito global
let mensajeGlobal = "Hola, mundo!"; // Variable global

function saludarGlobal() {
  console.log(mensajeGlobal); // Accede a la variable global
}

saludarGlobal(); // Imprime: Hola, mundo!

// Ejemplo de ámbito local
function saludarLocal() {
  let mensajeLocal = "Hola, amigo!"; // Variable local
  console.log(mensajeLocal); // Accede a la variable local
}

saludarLocal(); // Imprime: Hola, amigo!

// Intentar acceder a una variable local desde fuera de su ámbito dará un error:
// console.log(mensajeLocal); // Esto daría un error en tiempo de ejecución

// Ámbito global con var (evitar el uso de var es preferible)
var edad = 30;

function mostrarEdad() {
  console.log(edad); // Accede a la variable global 'edad' (var)
}

mostrarEdad(); // Imprime: 30

// Ámbito de bloque con let y const (introducido en ECMAScript 6)
function probarAmbito() {
  let x = 10; // 'x' es local a la función probarAmbito
  if (true) {
    let y = 20; // 'y' es local al bloque if
    console.log(x); // 10
    console.log(y); // 20
  }
  // console.log(y); // Esto daría un error, 'y' no está definido fuera del bloque if
}

probarAmbito();

// Variables globales pueden ser accedidas y modificadas dentro de funciones
let contador = 0;

function incrementarContador() {
  contador++;
}

incrementarContador();
console.log(contador); // Imprime: 1
incrementarContador();
console.log(contador); // Imprime: 2
