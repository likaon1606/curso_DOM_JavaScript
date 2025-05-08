# 📅 Día 6 – Modificar estilos y atributos con JavaScript

## 🧠 Conceptos clave

### Hoy aprenderás a:

- Cambiar estilos con `style.propiedad.`
- Modificar clases con `classList (add, remove, toggle, contains)`.
- Cambiar atributos con `setAttribute` y `getAttribute`.
- Ocultar y mostrar elementos usando `display, visibility y opacity`.

---

# 🧪 Ejemplos explicados

## Cambiar estilos directamente

#### 📄 HTML:
```html
<button id="btnCambiarColor">Cambiar color fondo</button>
<div id="cajaColor" style="width: 200px; height: 200px; background: lightblue;"></div>
```

#### 📜 JavaScript
```js
// Obtenemos el botón y el div al que se le cambiará el estilo
const btnCambiarColor = document.getElementById('btnCambiarColor');
const cajaColor = document.getElementById('cajaColor');

// Agregamos un evento click para cambiar el color de fondo del div
btnCambiarColor.addEventListener('click', () => {
  // Cambiamos directamente el estilo usando la propiedad style.backgroundColor
  cajaColor.style.backgroundColor = 'salmon';
});
```

---

## classList (add, remove, toggle, contains)

#### 📄 HTML:
```html
<button id="btnToggleClase">Toggle clase</button>
<div id="miCaja" class="resaltado">Caja con clase</div>
```

#### 🎨 CSS sugerido:
```css
.resaltado {
  border: 3px solid gold;
  background: lightyellow;
}
```

#### 📜 JavaScript
```js
// Obtenemos el botón y el div al que se le aplicarán clases
const btnToggleClase = document.getElementById('btnToggleClase');
const miCaja = document.getElementById('miCaja');

// Al hacer clic, alternamos la clase "resaltado" usando classList.toggle
btnToggleClase.addEventListener('click', () => {
  // Si la clase está presente se quita, si no está se agrega
  miCaja.classList.toggle('resaltado');
});
```

---

## setAttribute y getAttribute

#### 📄 HTML:
```html
<img id="miImagen" src="https://via.placeholder.com/150" alt="Imagen">
<button id="cambiarImagen">Cambiar Imagen</button>
```

#### 📜 JavaScript
```js
// Obtenemos el botón y la imagen
const cambiarImagen = document.getElementById('cambiarImagen');
const miImagen = document.getElementById('miImagen');

// Al hacer clic, cambiamos los atributos de la imagen
cambiarImagen.addEventListener('click', () => {
  // Usamos setAttribute para cambiar el atributo "src"
  miImagen.setAttribute('src', 'https://via.placeholder.com/200');

  // También podríamos cambiar el atributo "alt"
  miImagen.setAttribute('alt', 'Nueva imagen');
});
```

---

## Ocultar y mostrar elementos con style.display

#### 📄 HTML:
```html
<p id="miParrafo">Este párrafo se puede ocultar</p>
<button id="btnMostrarOcultar">Ocultar / Mostrar</button>
```

#### 📜 JavaScript
```js
// Obtenemos el párrafo y el botón
const miParrafo = document.getElementById('miParrafo');
const btnMostrarOcultar = document.getElementById('btnMostrarOcultar');

// Usamos una variable para saber si está visible
let visible = true;

btnMostrarOcultar.addEventListener('click', () => {
  // Si está visible, lo ocultamos usando display
  if (visible) {
    miParrafo.style.display = 'none';
  } else {
    miParrafo.style.display = 'block';
  }
  visible = !visible;
});
```

---

## Ocultar y mostrar con visibility y opacity

#### 📄 HTML:
```html
<p id="parrafoOcultar">Este texto se ocultará con opacity y visibility</p>
<button id="btnOcultarOpacity">Ocultar / Mostrar suavemente</button>
```

#### 📜 JavaScript
```js
const parrafoOcultar = document.getElementById('parrafoOcultar');
const btnOcultarOpacity = document.getElementById('btnOcultarOpacity');

let oculto = false;

btnOcultarOpacity.addEventListener('click', () => {
  if (!oculto) {
    // Oculta visualmente pero el elemento sigue ocupando espacio
    parrafoOcultar.style.opacity = '0';
    parrafoOcultar.style.visibility = 'hidden';
  } else {
    parrafoOcultar.style.opacity = '1';
    parrafoOcultar.style.visibility = 'visible';
  }
  oculto = !oculto;
});
```

#### 🎨 CSS opcional para transición:
```css
#parrafoOcultar {
  transition: opacity 0.3s ease;
}
```

---

# 🧹 Ejercicios prácticos

1. Crear un botón que oculte un elemento con visibility

#### 📄 HTML:
```html
<div id="cuadroOculto" style="width: 100px; height: 100px; background: coral;"></div>
<button id="toggleVisibility">Mostrar / Ocultar (visibility)</button>
```

## 📝 Objetivo:
- Al hacer clic, aplicar visibility: hidden y luego volver a visible.

2. Crear una lista donde los items cambien de color al hacer clic

#### 📄 HTML:
```html
<ul>
  <li class="item">Elemento 1</li>
  <li class="item">Elemento 2</li>
  <li class="item">Elemento 3</li>
</ul>
```

#### 🎨 CSS:
```css
.activo {
  background-color: lightgreen;
}
```

## 📝 Objetivo:
- Al hacer clic en un `<li>`, usar classList.toggle('activo') para cambiar su color. 

- **Reto**: Al dar click en el siguiente item, el anterior se debe deseleccionar.

3. Crear un botón que cambie el fondo de un div utilizando `style.propiedad`

#### 📄 HTML:
```html
<button id="btnCambiarFondo">Cambiar fondo a azul</button>
<div id="cuadro" style="width: 150px; height: 150px; background: lightgray;"></div>
```

## 📝 Objetivo:
- Al hacer clic en el botón, cambia el fondo del div a color azul usando style.backgroundColor.

- **Reto**: Alterna entre el color que elegiste y el que tiene por defecto cada vez que hagas click.

4. Crear un botón que añada una clase con classList.add

#### 📄 HTML:
```html
<button id="btnAñadirClase">Añadir clase de resaltado</button>
<div id="elementoResaltado">Elemento a resaltar</div>
```

#### 🎨 CSS:
```css
.resaltado {
  border: 2px solid red;
  font-weight: bold;
}
```

## 📝 Objetivo:
- Al hacer clic, añade la clase resaltado al div usando classList.add.

5. Crear un botón que quite una clase con `classList.remove`

#### 📄 HTML:
```html
<button id="btnQuitarClase">Quitar clase de resaltado</button>
<div id="miElemento" class="resaltado">Elemento con clase resaltado</div>
```

#### 🎨 CSS:
```css
.resaltado {
  background-color: yellow;
}
```

## 📝 Objetivo:
- Al hacer clic en el botón, quita la clase resaltado usando classList.remove.

6. Verificar si un div tiene una clase usando classList.contains

#### 📄 HTML:
```html
<button id="btnVerificarClase">Verificar clase</button>
<div id="miCaja">Caja con clase</div>
```

## 📝 Objetivo:
- Al hacer clic, verifica si el div tiene la clase resaltado usando classList.contains. Si la tiene, muestra un mensaje en la consola.

7. Crear un botón que cambie el atributo src de una imagen con setAttribute

📄 HTML:
```html
<img id="miImagen" src="https://via.placeholder.com/150" alt="Imagen original">
<button id="btnCambiarAtributo">Cambiar Atributo src</button>
```

## 📝 Objetivo:
- Al hacer clic, usa setAttribute para cambiar el atributo src de la imagen a una nueva URL.

8. Obtener el atributo alt de una imagen con `getAttribute`

#### 📄 HTML:
```html
<img id="miImagen" src="https://via.placeholder.com/150" alt="Imagen original">
<button id="btnObtenerAtributo">Obtener atributo alt</button>
```

### 📝 Objetivo:
- Al hacer clic en el botón, usa getAttribute para obtener y mostrar en la consola el valor del atributo alt de la imagen.

9. Crear un botón para ocultar y mostrar un `div` usando `style.display`

#### 📄 HTML:
```html
<button id="btnMostrar">Mostrar</button>
<button id="btnOcultar">Ocultar</button>
<div id="contenido">Este es un contenido que se puede mostrar o ocultar.</div>
```

## 📝 Objetivo:
- Al hacer clic en el botón "Mostrar", usa style.display para mostrar el div.

- Al hacer clic en el botón "Ocultar", usa style.display para ocultarlo.

10. Crear un botón para ocultar y mostrar un párrafo usando `visibility`

#### 📄 HTML:
```html
<p id="parrafo">Este párrafo debe ocultarse con visibility</p>
<button id="btnVisibility">Ocultar / Mostrar</button>
```

## 📝 Objetivo:
- Al hacer clic, oculta o muestra el párrafo utilizando visibility: hidden y visibility: visible.

11. Crear un botón para ocultar y mostrar un div con opacity

📄 HTML:
```html
<button id="btnOcultar">Ocultar / Mostrar con Opacidad</button>
<div id="bloque" style="width: 100px; height: 100px; background-color: orange;"></div>
```

## 📝 Objetivo:
Al hacer clic, cambia la opacidad del div entre 0 y 1 utilizando style.opacity.