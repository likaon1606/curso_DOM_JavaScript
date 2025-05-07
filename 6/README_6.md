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

1. Crear un botón que oculte un elemento con `visibility`

#### 📄 HTML:
```html
<div id="cuadroOculto" style="width: 100px; height: 100px; background: coral;"></div>
<button id="toggleVisibility">Mostrar / Ocultar (visibility)</button>
```

## 📝 Objetivo:
- Al hacer clic, aplicar `visibility: hidden` y luego volver a `visible`.

---

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
- Al hacer clic en un `<li>`, usar `classList.toggle('activo')` para cambiar su color.
