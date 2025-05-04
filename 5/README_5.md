# 📅 Día 5 – Crear y eliminar elementos del DOM

## 🎯 Objetivo
- Aprenderás a crear, insertar, reemplazar y eliminar nodos de manera dinámica usando JavaScript.

* 📄 HTML base
```sh
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Día 5 – Manipulación del DOM</title>
</head>
<body>
  <h1>Galería Dinámica</h1>
  <div id="galeria"></div>
  <script src="script5.js"></script>
</body>
</html>
```

## 📜 Métodos y ejemplos

- * document.createElement(tagName)
* Crea un nuevo elemento HTML.

const img = document.createElement('img');
img.src = 'foto1.jpg';
img.alt = 'Descripción';

document.createTextNode(texto)
Crea un nodo de texto independiente.

const texto = document.createTextNode('¡Hola, mundo!');
const p = document.createElement('p');
p.appendChild(texto);

parent.appendChild(hijo)
Inserta el nodo hijo al final de parent.
const galeria = document.getElementById('galeria');
galeria.appendChild(img);

parent.insertBefore(nuevo, referencia)
Inserta nuevo justo antes de referencia.
const primerImg = galeria.querySelector('img');
const segundaImg = document.createElement('img');
segundaImg.src = 'foto2.jpg';
galeria.insertBefore(segundaImg, primerImg);

parent.replaceChild(nuevo, viejo)
Reemplaza el nodo viejo por nuevo.
const nuevaFoto = document.createElement('img');
nuevaFoto.src = 'foto3.jpg';
galeria.replaceChild(nuevaFoto, primerImg);

node.removeChild(hijo)
Elimina hijo de su contenedor.
galeria.removeChild(segundaImg);

node.remove()
Elimina directamente el nodo del DOM.
nuevaFoto.remove();

node.cloneNode(deep)
Clona un nodo. Si deep es true, copia también sus hijos.
const clon = img.cloneNode(true);
galeria.appendChild(clon);

🛠️ Ejercicios
Crear y agregar

Crea un <div> con clase .tarjeta.

Dentro de .tarjeta, crea un <h2> con texto “Título” y un <p> con texto “Descripción”.

Agrégalo al elemento #galeria con appendChild.

Insertar antes

Crea un nuevo <p> que diga “Inicio de galería”.

Insértalo antes del primer hijo de #galeria usando insertBefore.

Reemplazar

Toma la primera .tarjeta que creaste y reemplázala por otra tarjeta distinta (cambia título y descripción) usando replaceChild.

Eliminar nodos

Borra la última tarjeta creada con removeChild.

Luego clona la tarjeta restante y pégala al final con cloneNode(true).

Crear con TextNode

Crea un botón que, al hacer clic, añada un <li> a una lista nueva <ul id="lista"></ul>.

El <li> debe generarse con createElement + createTextNode.

