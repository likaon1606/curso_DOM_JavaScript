// Exercise 1 - 2
const nombreUsuario = document.getElementById('nombreUsuario');  // Obtener el input donde el usuario introduce su nombre
const btnSaludo = document.getElementById('btnSaludo');  // Obtener el botón que muestra el saludo
const titulo = document.getElementById('titulo');  // Obtener el título en la página

// Añadir un event listener al botón para que cuando sea clickeado ejecute una función
btnSaludo.addEventListener('click', () => {
  const nombreGuardado = nombreUsuario.value;  // Obtener el valor del input del nombre

  alert(textContent = nombreGuardado);  // Mostrar una alerta con el nombre ingresado (esto tiene un pequeño error, debería ser alert(nombreGuardado))

  titulo.textContent = (`Bienvenido ${nombreGuardado}`);  // Cambiar el texto del título para saludar al usuario
});

// Exercise 3
const buttons = document.querySelectorAll('.color_btn');  // Seleccionar todos los botones que tienen la clase 'color_btn'

// Iterar sobre cada botón encontrado y añadirle un event listener para el click
buttons.forEach(button => {
  button.addEventListener('click', function () {
    const color = button.getAttribute('data-color');  // Obtener el atributo 'data-color' del botón (definiría el color)
    document.body.style.backgroundColor = color;  // Cambiar el color de fondo de la página según el atributo 'data-color'
  });
});

// Exercise 4
const agregarItem = document.getElementById('agregarItem');  // Obtener el botón para agregar un nuevo ítem
const listaDinamica = document.getElementById('listaDinamica');  // Obtener la lista donde se agregarán los ítems

// Añadir un event listener al botón de agregar para crear un nuevo ítem en la lista
agregarItem.addEventListener('click', () => {
  const item = document.createElement('li');  // Crear un nuevo elemento de lista
  item.textContent = "nuevo item";  // Establecer el texto del ítem a 'nuevo item'

  listaDinamica.appendChild(item);  // Agregar el ítem a la lista
  // Exercise 5
  listaDinamica.addEventListener('dblclick', () => {  // Añadir un event listener para el doble clic
    listaDinamica.remove();  // Si se hace doble clic, se elimina toda la lista
  });
});

// Exercise 6
const parrafoDoble = document.getElementById('parrafoDoble');  // Obtener el párrafo que cambia al hacer doble clic

let parrDbl = false;  // Variable para alternar entre los dos textos

const textParrafo = parrafoDoble.textContent;  // Guardar el texto original del párrafo para restaurarlo

// Añadir un event listener para el doble clic en el párrafo
parrafoDoble.addEventListener('dblclick', () => {
  if (!parrDbl) {  // Si el texto aún no ha cambiado
    parrafoDoble.textContent = 'Nuevo texto';  // Cambiar el texto del párrafo
    parrDbl = true;  // Cambiar el estado de la variable para indicar que el texto ha sido cambiado
  } else {  // Si el texto ya ha cambiado
    parrafoDoble.textContent = textParrafo;  // Restaurar el texto original
    parrDbl = false;  // Cambiar el estado de la variable para indicar que el texto ha sido restaurado
  }
});

// Exercise 7 - 9
const cuadro = document.getElementById('cuadro');  // Obtener el elemento con id 'cuadro'

const handleMouseEvent = (e) => {  // Función para manejar los eventos del mouse (mouseover y mouseout)
  if (e.type === 'mouseover') {  // Si el evento es 'mouseover'
    cuadro.style.backgroundColor = 'cyan';  // Cambiar el color de fondo del cuadro a cian
  } else if (e.type === 'mouseout') {  // Si el evento es 'mouseout'
    cuadro.style.backgroundColor = 'orange';  // Cambiar el color de fondo del cuadro a naranja
  }
};

cuadro.addEventListener('mouseover', handleMouseEvent);  // Añadir el evento 'mouseover' al cuadro
cuadro.addEventListener('mouseout', handleMouseEvent);  // Añadir el evento 'mouseout' al cuadro

// Exercise 8
const inputTeclado = document.getElementById('inputTeclado');  // Obtener el input donde el usuario escribe

// Añadir un event listener para cuando una tecla se presiona
inputTeclado.addEventListener('keydown', (e) => {
  console.log('Tecla presionada', e.key);  // Mostrar en la consola la tecla que fue presionada
});

// Añadir un event listener para cuando una tecla se suelta
inputTeclado.addEventListener('keyup', (e) => {
  console.log('Tecla soltada', e.key);  // Mostrar en la consola la tecla que fue soltada
});

// Exercise 9 - Reutilizar funciones
function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color;  // Función para cambiar el color de fondo de la página
}

// Iterar sobre todos los botones con la clase 'color-btn'
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {  // Añadir un event listener para cuando se haga clic en un botón
    cambiarColorFondo(e.target.textContent.toLowerCase());  // Cambiar el fondo usando el texto del botón
    resaltarBoton(e.target);  // Llamar a la función para resaltar el botón que se presionó
  });
});

// Exercise 10 - Aplicar clase highlight
function resaltarBoton(boton) {
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('highlight'));  // Eliminar la clase 'highlight' de todos los botones
  boton.classList.add('highlight');  // Añadir la clase 'highlight' al botón presionado
}

// Crear y añadir el estilo para la clase 'highlight'
const estiloHighlight = document.createElement('style');
estiloHighlight.textContent = `
  .highlight {
    border: 2px solid black;  // Añadir un borde negro al botón
    transform: scale(1.1);  // Ampliar el botón ligeramente
  }
`;
document.head.appendChild(estiloHighlight);  // Añadir el estilo al documento

// Exercise 11 - Deshabilitar botón de saludo si input está vacío
const toggleSaludoBtn = () => {
  btnSaludo.disabled = nombreUsuario.value.trim() === "";  // Deshabilitar el botón si el campo de nombre está vacío
};

nombreUsuario.addEventListener('input', toggleSaludoBtn);  // Añadir un event listener al input para que se ejecute cada vez que se cambie el texto
toggleSaludoBtn();  // Llamar a la función para inicializar el estado del botón

// Exercise 12 - Añadir ítems solo si input no está vacío
const inputItem = document.createElement('input');  // Crear un nuevo input donde el usuario puede escribir ítems
inputItem.placeholder = 'Escribe un ítem...';  // Establecer un texto de ejemplo en el input
inputItem.type = 'text';  // Establecer el tipo de input a texto
agregarItem.parentNode.insertBefore(inputItem, agregarItem);  // Insertar el nuevo input antes del botón de agregar

// Añadir un event listener para cuando se haga clic en el botón de agregar
agregarItem.addEventListener('click', () => {
  const texto = inputItem.value.trim();  // Obtener el texto ingresado en el input
  if (texto !== "") {  // Si el texto no está vacío
    const item = document.createElement('li');  // Crear un nuevo ítem en la lista
    item.textContent = texto;  // Establecer el texto del ítem
    item.addEventListener('dblclick', () => item.remove());  // Eliminar el ítem al hacer doble clic
    listaDinamica.appendChild(item);  // Añadir el ítem a la lista
    inputItem.value = '';  // Limpiar el campo de texto
  }
});

// Exercise 13 - Presionar Enter en input nombre = activar saludo
nombreUsuario.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && nombreUsuario.value.trim() !== '') {  // Si la tecla Enter es presionada y el input no está vacío
    btnSaludo.click();  // Hacer clic en el botón de saludo
  }
});

// Exercise 14 - Presionar Enter en input de ítems = agregar ítem
inputItem.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && inputItem.value.trim() !== '') {  // Si la tecla Enter es presionada y el input no está vacío
    agregarItem.click();  // Hacer clic en el botón de agregar ítem
  }
});

// Exercise 15 - Botón Reiniciar Todo
const reset = document.getElementById('reset');  // Obtener el botón de reiniciar

reset.addEventListener('click', () => {
  // Limpiar inputs
  nombreUsuario.value = '';  // Limpiar el input de nombre
  inputTeclado.value = '';  // Limpiar el input de teclado
  inputItem.value = '';  // Limpiar el input de ítems
  toggleSaludoBtn();  // Actualizar el estado del botón de saludo

  // Borrar lista
  listaDinamica.innerHTML = '';  // Eliminar todos los ítems de la lista

  // Restaurar fondo
  document.body.style.backgroundColor = '#f4f4f4';  // Restaurar el color de fondo a su valor inicial

  // Restaurar textos
  titulo.textContent = '👋 Bienvenido a tu Mini DOM Lab';  // Restaurar el título
  parrafoDoble.textContent = 'Haz doble clic aquí para cambiarme';  // Restaurar el texto del párrafo
  parrDbl = false;  // Cambiar el estado de la variable para que el texto se pueda alternar nuevamente

  // Quitar highlight
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('highlight'));  // Eliminar la clase 'highlight' de todos los botones
});
