📅 Día 6 – Modificar estilos y atributos con JavaScript
🧠 Conceptos clave
Hoy aprenderás a:

Cambiar estilos con style.propiedad.

Modificar clases con classList (add, remove, toggle, contains).

Cambiar atributos con setAttribute y getAttribute.

🧪 Ejemplos explicados
Cambiar estilos directamente
📄 HTML:

html
Copiar
Editar
<button id="btnCambiarColor">Cambiar color fondo</button>
<div id="cajaColor" style="width: 200px; height: 200px; background: lightblue;"></div>
📜 JavaScript (comentado):

js
Copiar
Editar
// Obtenemos el botón y el div al que se le cambiará el estilo
const btnCambiarColor = document.getElementById('btnCambiarColor');
const cajaColor = document.getElementById('cajaColor');

// Agregamos un evento click para cambiar el color de fondo del div
btnCambiarColor.addEventListener('click', () => {
  // Cambiamos directamente el estilo usando la propiedad style.backgroundColor
  cajaColor.style.backgroundColor = 'salmon';
});
classList (add, remove, toggle, contains)
📄 HTML:

html
Copiar
Editar
<button id="btnToggleClase">Toggle clase</button>
<div id="miCaja" class="resaltado">Caja con clase</div>
🎨 CSS opcional:

css
Copiar
Editar
.resaltado {
  border: 3px solid gold;
  background: lightyellow;
}
📜 JavaScript (comentado):

js
Copiar
Editar
// Obtenemos el botón y el div al que se le aplicarán clases
const btnToggleClase = document.getElementById('btnToggleClase');
const miCaja = document.getElementById('miCaja');

// Al hacer clic, alternamos la clase "resaltado" usando classList.toggle
btnToggleClase.addEventListener('click', () => {
  // Si la clase está presente se quita, si no está se agrega
  miCaja.classList.toggle('resaltado');
});
setAttribute y getAttribute
📄 HTML:

html
Copiar
Editar
<img id="miImagen" src="https://via.placeholder.com/150" alt="Imagen">
<button id="cambiarImagen">Cambiar Imagen</button>
📜 JavaScript (comentado):

js
Copiar
Editar
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
🧩 Ejercicios prácticos
Crear un botón que oculte y muestre un párrafo usando style.display

📄 HTML:

html
Copiar
Editar
<p id="miParrafo">Este párrafo se puede ocultar</p>
<button id="btnMostrarOcultar">Ocultar / Mostrar</button>
📝 Objetivo:

Usar style.display = 'none' para ocultar.

Volver a mostrar con style.display = 'block'.

Crear una lista de items que cambien de color al hacer clic

📄 HTML:

html
Copiar
Editar
<ul>
  <li class="item">Elemento 1</li>
  <li class="item">Elemento 2</li>
  <li class="item">Elemento 3</li>
</ul>
📝 Objetivo:

Usar classList.toggle() para aplicar una clase al hacer clic.

Crear una clase CSS para aplicar el color de fondo.