//**** */ Exercise 1

// Seleccionamos el botón
const btn_toggleVisibility = document.getElementById('toggleVisibility');
// Seleccionamos la caja "cuadroOculto"
const cuadroOculto = document.getElementById('cuadroOculto');

btn_toggleVisibility.addEventListener('click', () => {
  //* Usamos condicionales para alternar la visibilidad del cuadro
  // Si "cuadroOculto" esta oculto, lo mostramos
  if (cuadroOculto.style.visibility === 'hidden') {
    cuadroOculto.style.visibility = 'visible'
    // Si no está oculto, lo ocultamos
  } else {
    cuadroOculto.style.visibility = 'hidden'
  }
});

//**** */ Exercise 2

// Seleccionamos todos los items con la clase "item"
const items = document.querySelectorAll('.item');

// Recorremos con un ciclo "forEach" para acceder a todos los "items"
items.forEach(item => {
  // Esperamos que haya un evento "click"
  item.addEventListener('click', () => {
    // Le agregamos a ese item la clase "activo"
    item.classList.toggle('activo')
  })
})

//? Solución al reto
// items.forEach(item => {
//   item.addEventListener('click', () => {
//     // Quitamos la clase "activo" de los items que la tengan
//     items.forEach(i => i.classList.remove('activo'));

//     // Agregamos la clase "activo" solo al item clickeado
//     item.classList.add('activo')
//   });
// });


//**** */ Exercise 3

// Seleccionamos el boton
const btn_btnCambiarFondo = document.getElementById('btnCambiarFondo');
// Seleccionamos la caja "cuadro"
const cuadro = document.getElementById('cuadro');

// Esperamos el click con "addEventListener"
btn_btnCambiarFondo.addEventListener('click', () => {
  // Cambiamos el color del "div"
  cuadro.style.backgroundColor = 'cyan';
});

//? Solución al reto

// // 1. Declaramos una variable fuera del addEventListener para controlar el estado del color
// let colorCambiado = false; // Al principio, no ha cambiado el color

// // 2. Añadimos el "click" al botón con id btn_btnCambiarFondo
// btn_btnCambiarFondo.addEventListener('click', () => {

//   // 3. Comprobamos si el color ya ha sido cambiado
//   if (!colorCambiado) {
    
//     // 4. Si no se ha cambiado, aplicamos el color 'cyan'
//     cuadro.style.backgroundColor = 'cyan';
    
//     // 5. Marcamos la variable colorCambiado como 'true', indicando que el color ha sido cambiado
//     colorCambiado = true;

//   } else {
    
//     // 6. Si ya ha sido cambiado, lo revertimos al color por defecto
//     cuadro.style.backgroundColor = '';
    
//     // 7. Marcamos la variable colorCambiado como 'false', indicando que el color vuelve al estado inicial
//     colorCambiado = false;
//   }
// });

//* NOTA IMPORTANTE:

//? Operador de negación "!"
// El operador ! en JavaScript es el operador de negación. Se utiliza para invertir el valor de una expresión booleana. Es decir, si la expresión es true, se convierte en false, y si es false, se convierte en true.


