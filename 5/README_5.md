# 📅 Día 5 – Crear y eliminar elementos del DOM
## 🧠 Conceptos clave
- * Hoy aprenderás a:

- Crear elementos con document.createElement().

- Agregar texto con textContent.

- Asignar clases con classList.add().

- Insertar elementos en el DOM con appendChild() y append().

- Eliminar elementos con remove() y removeChild().

- Usar botones y eventos para realizar estas acciones.

## 🧪 Ejemplos explicados
### Crear un elemento y agregarlo al DOM
- 📄 HTML:
```sh
<button id="crearTarjeta">Crear Tarjeta</button>
<div id="contenedorTarjetas"></div>
```

- 📜 JavaScript:
```sh
const btnCrear = document.getElementById('crearTarjeta');
const contenedor = document.getElementById('contenedorTarjetas');

btnCrear.addEventListener('click', () => {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  const titulo = document.createElement('h2');
  titulo.textContent = 'Título';

  const descripcion = document.createElement('p');
  descripcion.textContent = 'Descripción';

  tarjeta.append(titulo, descripcion); // también puedes usar appendChild()

  contenedor.appendChild(tarjeta);
});
```

- 🎨 CSS opcional para ver mejor la tarjeta:
```sh
.tarjeta {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
}
```

### Eliminar un elemento del DOM
- 📄 HTML:
```sh
<div id="mensaje">Este mensaje será eliminado</div>
<button id="btnEliminar">Eliminar mensaje</button>
```

- 📜 JavaScript:
```sh
const mensaje = document.getElementById('mensaje');
const btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', () => {
  mensaje.remove(); // elimina directamente el elemento
});
```

# 🧩 Ejercicios prácticos
- * 1.- Crear una lista de tareas

- 📄 HTML:
```sh
<input type="text" id="tareaInput" placeholder="Escribe una tarea" />
<button id="agregarTarea">Agregar Tarea</button>
<ul id="listaTareas"></ul>
```

- * 📜 Objetivo:

- Al hacer clic en "Agregar Tarea":

- Crear un <li> con el texto del input.

- Insertarlo en #listaTareas.

- Vaciar el input.

---------------------------------------------------

- * 2.- Crear una tarjeta con botón para eliminarse a sí misma

- 📄 HTML:
```sh
<button id="crearAutoTarjeta">Crear Tarjeta con botón</button>
<div id="zonaTarjetas"></div>
```

- * 📜 Objetivo:

- Al hacer clic en el botón:

- Crear un div con clase .tarjeta.

- Agregarle un título, descripción y un botón que diga "Eliminar".

- Cuando se haga clic en "Eliminar", esa tarjeta desaparece.

