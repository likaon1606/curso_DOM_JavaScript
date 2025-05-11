//* Exercise 1
const cambiarTexto = document.getElementById('cambiarTexto'); 
// Seleccionamos el elemento con ID 'cambiarTexto'

cambiarTexto.addEventListener('click', () => {
  // Al hacer click en el elemento...
  cambiarTexto.textContent = '¡Gracias!';
  // Cambia el contenido del texto a "¡Gracias!"
});

//* Exercise 2
const botonNombre = document.querySelectorAll('.botonNombre'); 
// Seleccionamos todos los elementos con la clase 'botonNombre'

botonNombre.forEach(boton => {
  // Recorremos cada uno de los botones
  boton.addEventListener('click', function () {
    // Al hacer click en un botón...
    alert(this.textContent);
    // Muestra una alerta con el texto del botón
  });
});

//* Exercise 3
function cambiarColor(e) {
  // Definimos una función que recibe el evento 'e'
  e.target.style.color = 'green';
  // Cambia el color del texto del botón a verde
}

document.querySelectorAll('.btn').forEach(boton => {
  // Seleccionamos todos los elementos con la clase 'btn' y los recorremos
  boton.addEventListener('click', cambiarColor);
  // Asignamos la función cambiarColor al evento click de cada botón
});

//* Exercise 4
const parrafo = document.getElementById('parrafo');
// Seleccionamos el elemento con ID 'parrafo'

parrafo.addEventListener('dblclick', () => {
  // Al hacer doble click en el párrafo...
  alert(parrafo.textContent = 'Hiciste "Doble" Click...');
  // Cambia el texto del párrafo y muestra una alerta con ese texto
});

//* Solución Reto
// const parrafoReto = document.getElementById('parrafo');
// // Seleccionamos el mismo párrafo

// let parrafoState = false;
// // Creamos una variable booleana para controlar el estado

// const textoOriginal = parrafoReto.textContent;
// // Guardamos el texto original del párrafo

// parrafoReto.addEventListener('dblclick', () => {
//   // Al hacer doble click...
//   if (!parrafoState) {
//     // Si el estado es falso...
//     parrafoReto.textContent = 'Hiciste "Doble" Click...';
//     // Cambiamos el texto
//     parrafoState = true;
//     // Y cambiamos el estado
//   } else {
//     parrafoReto.textContent = textoOriginal;
//     // Si el estado es verdadero, restauramos el texto original
//     parrafoState = false;
//     // Y restablecemos el estado
//   }
// });

//* Exercise 5
const changeColor = document.getElementById('area');
// Seleccionamos el elemento con ID 'area'

changeColor.addEventListener('mouseover', () => {
  // Cuando el mouse entra en el área...
  changeColor.style.backgroundColor = 'blue';
  // Cambia el fondo a azul
});

changeColor.addEventListener('mouseout', () => {
  // Cuando el mouse sale del área...
  changeColor.style.backgroundColor = 'coral';
  // Cambia el fondo a coral
});

//* Solución Reto
// const handleMouseEvent = (e) => {
//   // Función que recibe el evento
//   if (e.type === 'mouseover') {
//     // Si el tipo es mouseover
//     changeColor.style.backgroundColor = 'blue';
//   } else if (e.type === 'mouseout') {
//     // Si el tipo es mouseout
//     changeColor.style.backgroundColor = 'coral';
//   }
// };
// changeColor.addEventListener('mouseover', handleMouseEvent);
// changeColor.addEventListener('mouseout', handleMouseEvent);

//* Exercise 6
const entrada = document.getElementById('entrada');
// Seleccionamos el input con ID 'entrada'

entrada.addEventListener('keydown', (e) => {
  //* Se usa e.key (o event.key) para obtener la tecla específica que fue presionada durante un evento de teclado, como keydown, keypress o keyup.
  // Cuando se presiona una tecla...
  console.log('Tecla Presionada', e.key);
  // Muestra en consola qué tecla fue presionada
});

entrada.addEventListener('keyup', (e) => {
  // Cuando se suelta una tecla...
  console.log('Tecla Soltada', e.key);
  // Muestra en consola qué tecla fue soltada
});
