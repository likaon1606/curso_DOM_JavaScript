# 📅 Día 5 – Crear y eliminar elementos del DOM
## 🧠 Conceptos clave
### Hoy aprenderás a:

- Crear elementos con document.createElement().

- Agregar texto con textContent.

- Asignar clases con classList.add().

- Insertar elementos en el DOM con appendChild() y append().

- Eliminar elementos con remove() y removeChild().

- Usar botones y eventos para realizar estas acciones.

# 🧪 Ejemplos explicados

## Crear un elemento y agregarlo al DOM

#### 📄 HTML:
```html
<button id="crearTarjeta">Crear Tarjeta</button>
<div id="contenedorTarjetas"></div>
```

#### 📜 JavaScript:
```js
// Obtenemos el botón para crear una tarjeta
const btnCrear = document.getElementById('crearTarjeta');
// Obtenemos el contenedor donde se insertarán las tarjetas
const contenedor = document.getElementById('contenedorTarjetas');

// Escuchamos el evento click sobre el botón
btnCrear.addEventListener('click', () => {
  // Creamos un nuevo elemento <div>
  const tarjeta = document.createElement('div');
  // Le agregamos la clase "tarjeta"
  tarjeta.classList.add('tarjeta');

  // Creamos un elemento <h2> para el título
  const titulo = document.createElement('h2');
  // Le asignamos texto al título
  titulo.textContent = 'Título';

  // Creamos un elemento <p> para la descripción
  const descripcion = document.createElement('p');
  // Le asignamos texto a la descripción
  descripcion.textContent = 'Descripción';

  // Insertamos el título y la descripción dentro de la tarjeta
  // Usamos append() para añadir múltiples nodos a la vez
  tarjeta.append(titulo, descripcion);

  // Finalmente, insertamos la tarjeta dentro del contenedor en el DOM
  contenedor.appendChild(tarjeta);
});

```

#### 🎨 CSS 
- opcional para ver mejor la tarjeta:
```css
.tarjeta {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
}
```

## Eliminar un elemento del DOM

#### 📄 HTML:
```html
<div id="mensaje">Este mensaje será eliminado</div>
<button id="btnEliminar">Eliminar mensaje</button>
```

#### 📜 JavaScript:
```js
// Obtenemos el elemento con el mensaje a eliminar
const mensaje = document.getElementById('mensaje');
// Obtenemos el botón que eliminará el mensaje
const btnEliminar = document.getElementById('btnEliminar');

// Escuchamos el evento click en el botón
btnEliminar.addEventListener('click', () => {
  // Eliminamos directamente el elemento del DOM con .remove()
  mensaje.remove();
});

```

# 🧩 Ejercicios prácticos
1. Crear una lista de tareas

#### 📄 HTML:
```html
<input type="text" id="tareaInput" placeholder="Escribe una tarea" />
<button id="agregarTarea">Agregar Tarea</button>
<ul id="listaTareas"></ul>
```

## 📜 Objetivo:

- Al hacer clic en "Agregar Tarea":

- Crear un `<li>` con el texto del input.

- Insertarlo en #listaTareas.

- Vaciar el input.

---

2. Crear una tarjeta con botón para eliminarse a sí misma

#### 📄 HTML:
```html
<button id="crearAutoTarjeta">Crear Tarjeta con botón</button>
<div id="zonaTarjetas"></div>
```

## 📜 Objetivo:

- Al hacer clic en el botón:

- Crear un div con clase .tarjeta.

- Agregarle un título, descripción y un botón que diga "Eliminar".

- Cuando se haga clic en "Eliminar", esa tarjeta desaparece.

