// Selección por ID
const titulo = document.getElementById("titulo");
console.log("getElementById:", titulo);

// Selección por clase (devuelve HTMLCollection)
const descripciones = document.getElementsByClassName("descripcion");
console.log("getElementsByClassName:", descripciones);

// Selección por etiqueta
const parrafos = document.getElementsByTagName("p");
console.log("getElementsByTagName:", parrafos);

// querySelector (primer elemento que coincida)
const primerBoton = document.querySelector(".btn");
console.log("querySelector:", primerBoton);

// querySelectorAll (todos los que coincidan)
const todosLosBotones = document.querySelectorAll(".btn");
console.log("querySelectorAll:", todosLosBotones);
