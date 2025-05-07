//TODO 1. Crear una lista de tareas 

const btn_agregarTarea = document.getElementById('agregarTarea');
const tareaInput = document.getElementById('tareaInput');
const listaTareas = document.getElementById('listaTareas');

btn_agregarTarea.addEventListener('click', () => {
  // creamos el <li>
  const liAdd = document.createElement('li');
  // Le asignamos el texto del input al 'li' que acabamos de crear
  liAdd.textContent = tareaInput.value


  // insertamos el li en el ul "listaTareas"
  listaTareas.appendChild(liAdd);
  // Limpiamos el Input
  tareaInput.value = '';
});

//* ----------------------------

// TODO: 2. Crear una tarjeta con botón para eliminarse a sí misma

const btn_crearAutoTarjeta = document.getElementById('crearAutoTarjeta');
const zonaTarjetas = document.getElementById('zonaTarjetas');

btn_crearAutoTarjeta.addEventListener('click', () => {
  // Creamos el "div"
  const tarjeta = document.createElement('div');
  // Le asignamos la clase "tarjeta"
  tarjeta.classList.add('tarjeta');

  // Agregamos título
  const titulo = document.createElement('h2');
  titulo.textContent = 'Título principal'
  // Agregamos una Descripción
  const descripcion = document.createElement('p');
  descripcion.textContent = 'Aquí va la descripción'

  // Creamos el botón "Eliminar"
  const btn_eliminar = document.createElement('button')
  // Le damos el título "Eliminar"
  btn_eliminar.textContent = 'Eliminar'

  // Insertamos multiples nodos
  tarjeta.append(titulo, descripcion, btn_eliminar);

  // Eliminamos con el botón "btn_eliminar"
  btn_eliminar.addEventListener('click', () => {
    tarjeta.remove();
  })

  //Insertamos la tarjeta dentro del contenedor "zonaTarjetas"
  zonaTarjetas.appendChild(tarjeta);
});

