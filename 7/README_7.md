📅 Día 7 – Navegar el DOM (Padres, Hijos, Hermanos)
🧠 Conceptos clave
Hoy aprenderás a:

Acceder al padre de un elemento con parentNode / parentElement.

Acceder a hijos con children, firstElementChild, lastElementChild.

Acceder a hermanos con nextElementSibling y previousElementSibling.

🧪 Ejemplos explicados
Acceder al padre de un elemento
📄 HTML:

html
Copiar
Editar
<div id="contenedor">
  <p id="miParrafo">Soy un párrafo</p>
</div>
<button id="mostrarPadre">Mostrar padre</button>
📜 JavaScript (comentado):

js
Copiar
Editar
// Obtenemos el botón y el párrafo
const btnPadre = document.getElementById('mostrarPadre');
const miParrafo = document.getElementById('miParrafo');

// Al hacer clic, mostramos en consola el padre del párrafo
btnPadre.addEventListener('click', () => {
  // Usamos parentElement para acceder al contenedor padre
  console.log(miParrafo.parentElement); // Devuelve el div con id="contenedor"
});
Acceder a los hijos de un elemento
📄 HTML:

html
Copiar
Editar
<div id="lista">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
  <p>Elemento 3</p>
</div>
<button id="mostrarHijos">Mostrar hijos</button>
📜 JavaScript (comentado):

js
Copiar
Editar
// Obtenemos el botón y el contenedor con los párrafos
const btnHijos = document.getElementById('mostrarHijos');
const lista = document.getElementById('lista');

// Al hacer clic, mostramos los hijos del contenedor
btnHijos.addEventListener('click', () => {
  // Usamos children para obtener una colección de nodos hijos
  const hijos = lista.children;

  // Mostramos cada hijo en consola
  for (let i = 0; i < hijos.length; i++) {
    console.log(hijos[i]);
  }

  // También podríamos acceder directamente al primero y último
  console.log('Primero:', lista.firstElementChild);
  console.log('Último:', lista.lastElementChild);
});
Acceder a hermanos de un elemento
📄 HTML:

html
Copiar
Editar
<ul>
  <li>Elemento A</li>
  <li id="elementoCentral">Elemento B</li>
  <li>Elemento C</li>
</ul>
<button id="mostrarHermanos">Mostrar hermanos</button>
📜 JavaScript (comentado):

js
Copiar
Editar
// Obtenemos el botón y el elemento central
const btnHermanos = document.getElementById('mostrarHermanos');
const central = document.getElementById('elementoCentral');

// Al hacer clic, accedemos a los hermanos anterior y siguiente
btnHermanos.addEventListener('click', () => {
  // previousElementSibling accede al anterior hermano
  console.log('Anterior:', central.previousElementSibling);

  // nextElementSibling accede al siguiente hermano
  console.log('Siguiente:', central.nextElementSibling);
});
🧩 Ejercicios prácticos
Crear un botón que muestre el texto del primer hijo de una sección

📄 HTML:

html
Copiar
Editar
<section id="seccion">
  <h2>Título</h2>
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>
</section>
<button id="mostrarPrimerHijo">Mostrar primer hijo</button>
📝 Objetivo:

Usar firstElementChild o children[0] para mostrar el primer hijo de la sección.

Crear una lista donde al hacer clic en un elemento, se marque su hermano siguiente

📄 HTML:

html
Copiar
Editar
<ul id="listaHermanos">
  <li>Uno</li>
  <li>Dos</li>
  <li>Tres</li>
</ul>
📝 Objetivo:

Al hacer clic en un <li>, aplicar una clase al siguiente hermano con nextElementSibling.

🎨 CSS sugerido:

css
Copiar
Editar
.marcado {
  background-color: lightgreen;
}