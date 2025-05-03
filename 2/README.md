# Día 2 – Manipulación de contenido y atributos

# 🎯 Objetivo del día:
Aprenderás a modificar el contenido de los elementos (texto o HTML) y a leer o cambiar sus atributos como href, src, id, etc.

# 📚 Parte 1: Modificar contenido

* textContent
- Modifica el texto de un elemento, sin interpretar etiquetas HTML.

Ejemplo:
html:

```sh
<p id="parrafo1">Texto original</p>

js:
const p = document.getElementById("parrafo1");
p.textContent = "Nuevo texto sin <strong>HTML</strong>"; #Esto interpretará las etiquetas "strong" como texto

innerHTML
Modifica el contenido HTML del elemento, interpretando etiquetas.

js:
p.innerHTML = "Texto con <strong>HTML</strong>";

innerText
Similar a textContent, pero tiene en cuenta el CSS (como visibility o display: none).

js:
console.log(p.innerText); // muestra solo texto visible
```

# 📚 Parte 2: Modificar atributos

* Usamos los siguientes métodos:

- `element.getAttribute`("atributo")

- `element.setAttribute`("atributo", "valor")

* También puedes acceder directamente con `element.atributo`

* Ejemplo:
* html:

```sh
<img id="imagen" src="logo.png" alt="Logo">

js:
const img = document.getElementById("imagen");

// Leer atributos
console.log(img.getAttribute("src")); // "logo.png"
console.log(img.alt); // "Logo" (forma directa)

// Cambiar atributos
img.setAttribute("src", "nuevo-logo.png");
img.alt = "Nuevo logo";
```
# ✅ Mini-ejemplo completo:

* index.html:
```sh
<p id="mensaje">Hola</p> <a id="enlace" href="https://google.com">Ir a Google</a>
script.js:
const mensaje = document.getElementById("mensaje");
mensaje.textContent = "¡Bienvenido!";

const enlace = document.getElementById("enlace");
enlace.setAttribute("href", "https://openai.com");
enlace.textContent = "Ir a OpenAI";
```
# 🧠 Resumen rápido:

* textContent → solo texto plano

* innerHTML → texto + HTML

* getAttribute / setAttribute → para atributos como href, src, alt, etc.

# 🛠️ Ejercicios Día 2:

- Crea un párrafo con id="info" que diga "Cargando..."

- Crea un botón con id="btnCambiar"
- 
- Cuando le des click al botón:
- 
- Cambia el contenido del párrafo a "Contenido cargado"
- 
- Cambia el texto del botón a "Ya cambió"
- 
- Crea una imagen con id="logo" y src="imagen1.jpg"
- 
- Al hacer click en otro botón, cambia su src a "imagen2.jpg"