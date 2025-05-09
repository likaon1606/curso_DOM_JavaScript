# 📆 Día 3 – Manipulación de Clases y Estilos con JavaScript

* 🔹 Objetivo del día:
- Aprenderás a modificar los estilos de los elementos HTML directamente con JavaScript y también a agregar, quitar o alternar clases CSS dinámicamente.

## 🧠 Conceptos clave de hoy:

- `element.style.propiedad` → modifica estilos en línea.

- `element.classList.add()` → añade una clase.

- `element.classList.remove()` → elimina una clase.

- `element.classList.toggle()` → agrega o quita una clase dependiendo de si ya está presente.

- `element.classList.contains()` → verifica si el elemento tiene esa clase.

## 🧪 Ejemplo con explicación:

* HTML:

```html
<p id="miParrafo">Texto original</p>
<button id="btnEstilo">Cambiar estilo</button>
```

* CSS:

```css
.destacado {
  color: white;
  background-color: teal;
  padding: 10px;
  border-radius: 5px;
}
```

* JS:

```js
const parrafo = document.getElementById('miParrafo');
const boton = document.getElementById('btnEstilo');

boton.addEventListener('click', () => {
  parrafo.classList.toggle('destacado');
});
```


## 🧠 ¿Qué hace?
Cada vez que haces clic en el botón, se alterna la clase destacado. Si la tiene, se quita. Si no la tiene, se añade. toggle es perfecto para botones de activar/desactivar.

## 📚 Ejercicios de hoy:

- Crea un párrafo y un botón que cambie su color de fondo a amarillo usando `style.backgroundColor`.

- Crea un `div` con una clase "oculto" que tenga `display: none`. Agrega un botón que quite esa clase al hacer clic.

- Haz un botón que alterne entre dos clases diferentes en un mismo `div (por ejemplo .rojo y .azul)`.

- Usa `classList.contains` para verificar si un elemento tiene una clase y muestra el resultado en consola.

* 📌 Tip extra: puedes definir las clases en tu archivo `CSS` y activarlas con `classList en JS`.