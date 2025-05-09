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


//**** */ Exercise 4
// Seleccionamos la caja "elementoResaltado"
const elementoResaltado = document.getElementById('elementoResaltado');
// Seleccionamos el botón "btnAñadirClase"
const btnAñadirClase = document.getElementById('btnAñadirClase');

// Estamos a la escucha de un click
btnAñadirClase.addEventListener('click', () => {
  // Agregamos la clase
  elementoResaltado.classList.add('resaltado')
})


//**** */ Exercise 5
//? Nota: A partir de ahora solo se explicarán los métodos que no se haya utilizado

const btnQuitarClase = document.getElementById('btnQuitarClase');
const miElemento = document.getElementById('miElemento');

btnQuitarClase.addEventListener('click', () => {
  // Quitamos la clase con .remove
  miElemento.classList.remove('resaltado')
});

//**** */ Exercise 6
const btnVerificarClase = document.getElementById('btnVerificarClase');
const miCaja = document.getElementById('miCaja');

btnVerificarClase.addEventListener('click', () => {
  // Verificamos si "miCaja" tiene la clase 'resaltado'
  if (miCaja.classList.contains('resaltado')) {
    // Mostramos el mensaje si contiene la clase
    console.log('Sí contiene la clase "resaltado"');
  } else {
    // Mostramos el mensaje si NO contiene la clase
    console.log('No contiene la clase "resaltado"');
  }
});

//**** */ Exercise 7
const btnCambiarAtributo = document.getElementById('btnCambiarAtributo');
const miImagen = document.getElementById('miImagen');

btnCambiarAtributo.addEventListener('click', () => {
  miImagen.setAttribute('src', 'https://www.aprenderaprogramar.com/images/stories/Cursos/CU011/CU01124E_1.png')
});

//**** */ Exercise 8
const btnObtenerAtributo = document.getElementById('btnObtenerAtributo');

btnObtenerAtributo.addEventListener('click', () => {
  const altActual = miImagen.getAttribute('alt');
  console.log('Alt actual: ', altActual);
});

//**** */ Exercise 9
const btnOcultar = document.getElementById('btnOcultar');
const btnMostrar = document.getElementById('btnMostrar');
const contenido = document.getElementById('contenido');

btnOcultar.addEventListener('click', () => {
  // Ocultamos el contenido
  contenido.style.display = 'none'
});

btnMostrar.addEventListener('click', () => {
  // Mostramos el contenido
  contenido.style.display = 'block'
});

//**** */ Exercise 10
const btnVisibility = document.getElementById('btnVisibility');
const parrafo = document.getElementById('parrafo');

let ocultar = false; // Variable que indica si el párrafo está oculto o no

btnVisibility.addEventListener('click', () => { 
  if (!ocultar) {
    // Si el párrafo no está oculto, lo ocultamos:
    parrafo.style.opacity = '0';          // Lo hacemos totalmente transparente
    parrafo.style.visibility = 'hidden';  // Y lo sacamos del flujo visual
  } else {
    // Si ya está oculto, lo mostramos:
    parrafo.style.opacity = '1';          // Le devolvemos la opacidad
    parrafo.style.visibility = 'visible'; // Y lo volvemos visible en el flujo
  }

  // Invertimos el estado para la próxima vez que se haga clic
  ocultar = !ocultar;
});

//**** */ Exercise 11
const btnOculto = document.getElementById('btnOcultando');
const bloque = document.getElementById('bloque');

let ocultando = false; // Definimos una variable para controlar el estado de la opacidad (si está oculta o no)

btnOculto.addEventListener('click', () => {
  // Verificamos si la variable 'ocultando' es falsa (lo que significa que la opacidad está en 1, visible)
  if (!ocultando) {
    // Si 'ocultando' es falso, cambiamos la opacidad a 0.3 (semi-transparente)
    bloque.style.opacity = '0.3';
  } else {
    // Si 'ocultando' es verdadero, volvemos a poner la opacidad a 1 (totalmente visible)
    bloque.style.opacity = '1';
  }

  // Invertimos el valor de 'ocultando' para alternar entre 0.3 y 1
  ocultando = !ocultando;
});

