# Día 1 – Introducción al DOM y selección de elementos

## 🎯 Objetivo: Aprender a seleccionar elementos del DOM usando diferentes métodos.

## 📚 ¿Qué es el DOM?

* DOM significa Document Object Model. Es una representación en memoria del documento HTML. JavaScript puede usarlo para:

- Leer elementos (párrafos, encabezados, inputs, etc.)

- Cambiar su contenido

- Agregar nuevos elementos

- Responder a eventos del usuario

## 🧠 Métodos de selección de elementos

```sh
document.getElementById(id)
 Selecciona un único elemento por su ID.

document.querySelector(selector)
 Selecciona el primer elemento que coincida con un selector CSS.

document.querySelectorAll(selector)
 Selecciona todos los elementos que coincidan con el selector CSS (devuelve una NodeList).

document.getElementsByClassName(className)
 Selecciona todos los elementos con la clase dada (HTMLCollection).

document.getElementsByTagName(tagName)
 Selecciona todos los elementos con esa etiqueta (HTMLCollection).
```
## ✅ Ejemplo completo:

* index.html:
<!-- 
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Día 1 – Selección de Elementos</title>
</head>
<body>
  <h1 id="titulo">Mi sitio</h1>
  <p class="descripcion">Un sitio para practicar JavaScript</p>
  <p class="descripcion">¡Aprendamos juntos!</p>
  <div id="contenedor">
    <button class="btn">Botón 1</button>
    <button class="btn">Botón 2</button>
  </div>
  <script src="script.js"></script>
</body>
</html> -->

* 🧠 ¿Qué devuelve cada uno?

- `getElementById` → un solo elemento (o null si no existe)

- `getElementsByClassName` → HTMLCollection (array-like)

- `querySelector` → primer elemento que coincida

- `querySelectorAll` → NodeList (puede usarse con forEach)


## 🛠️ Ejercicios Día 1

- Crea un HTML con 2 párrafos y 2 botones (pueden estar vacíos).

- En JS:

- Usa `getElementById` para seleccionar un párrafo y mostrarlo por consola.

- Usa `getElementsByClassName` para mostrar todos los párrafos.

- Usa `querySelector` para seleccionar el primer botón.

- Usa `querySelectorAll` para seleccionar todos los botones.

- Imprime los resultados en consola.