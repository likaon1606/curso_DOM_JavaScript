# 🗕️ Día 7 – Eventos del DOM y this

## 🧠 Conceptos clave

### Hoy aprenderás a:

- Qué es un evento en JavaScript.
- Usar addEventListener para escuchar eventos.
- Diferencia entre onclick y addEventListener.
- El valor de "this" en los manejadores de eventos.
- Cómo usar funciones separadas para manejar eventos.
- Otros eventos comunes como dblclick, mouseover, mouseout, keydown, keyup.

---

# 🧪 Ejemplos explicados

## Usar addEventListener en lugar de onclick

- addEventListener: Método que añade un escuchador de eventos a un elemento (ej. clic, teclado, etc.).
- onclick: Atributo o propiedad que define una sola función para el evento de clic. Ej: `element.onclick = handler`
- `alert`: lanza una alerta visual.

#### 📄 HTML:
```html
<button id="btnSaludo">Saludar</button>
```

#### 📜 JavaScript
```js
const btnSaludo = document.getElementById('btnSaludo');
// Se obtiene el botón por su ID
btnSaludo.addEventListener('click', () => {
  // Se escucha el evento "click" y se ejecuta una función flecha
  alert('¡Hola desde addEventListener!'); // Muestra un mensaje al usuario
});
```

---

## Comparación: onclick vs addEventListener

- `addEventListener` permite múltiples funciones por evento; `onClick` solo una, la última sobrescribe las anteriores.

#### 📄 HTML:
```html
<button id="btn1">Con onclick</button>
<button id="btn2">Con addEventListener</button>
```

#### 📜 JavaScript
```js
btn1.onclick = () => {
  // Solo esta función se ejecutará al hacer clic
  alert('Esto viene de onclick');
};

btn2.addEventListener('click', () => {
  alert('Primera función'); // Esta se ejecuta primero
});

btn2.addEventListener('click', () => {
  alert('Segunda función'); // Esta también se ejecuta, porque addEventListener permite varias
});
```

---

## Usando "this" dentro del evento

- this: Palabra clave que se refiere al contexto actual, normalmente el elemento que disparó el evento.

#### 📄 HTML:
```html
<button class="btnColor">Rojo</button>
<button class="btnColor">Azul</button>
<button class="btnColor">Verde</button>
```

#### 📜 JavaScript
```js
const botones = document.querySelectorAll('.btnColor');
// Seleccionamos todos los botones con la clase btnColor

botones.forEach(boton => {
  // Recorremos cada botón
  boton.addEventListener('click', function () {
    // Usamos función normal para que this apunte al elemento clickeado
    this.style.backgroundColor = this.textContent.toLowerCase();
    // Cambia el fondo del botón al color de su texto
  });
});
```

## Funciones externas como manejadores de eventos

- Puedes definir una función por separado (fuera del `addEventListener`) y pasarla como referencia.
- Esto permite **reutilizar** la misma lógica en múltiples elementos sin repetir código.

#### 📄 HTML:
```html
<button class="btn">1</button>
<button class="btn">2</button>
<button class="btn">3</button>
```

#### 📜 JavaScript
```js
function cambiarColor(evento) {
  // evento.target es el botón que fue clickeado
  evento.target.style.backgroundColor = 'lightblue'; // Cambia el fondo del botón
}

const botones = document.querySelectorAll('.btn');
// Seleccionamos todos los botones con clase .btn

botones.forEach(boton => {
  // A cada botón le asignamos el mismo manejador
  boton.addEventListener('click', cambiarColor);
});
```

## 🧠 ¿Por qué usar funciones externas?
- Porque así puedes mantener tu código más limpio, organizado y reutilizable.

---

## Otros eventos del DOM comunes

### Doble clic: dblclick

- Se activa cuando se hace doble clic sobre un elemento.

#### 📄 HTML:
```html
<button id="btnDoble">Haz doble clic</button>
```

#### 📜 JavaScript
```js
const btnDoble = document.getElementById('btnDoble');
// Seleccionamos el botón por ID
btnDoble.addEventListener('dblclick', () => {
  // Escuchamos evento dblclick
  alert('¡Doble clic detectado!'); // Mostramos alerta
});
```

---

### Mouseover y mouseout

- mouseover: Cuando el puntero entra en un elemento.
- mouseout: Cuando el puntero sale de un elemento.

#### 📄 HTML:
```html
<div id="cuadro" style="width:100px;height:100px;background:red;"></div>
```

#### 📜 JavaScript
```js
const cuadro = document.getElementById('cuadro');
// Obtenemos el div

cuadro.addEventListener('mouseover', () => {
  // Cuando el mouse entra, cambiamos el color
  cuadro.style.backgroundColor = 'green';
});

cuadro.addEventListener('mouseout', () => {
  // Cuando el mouse sale, vuelve al color original
  cuadro.style.backgroundColor = 'red';
});
```

---

### keydown y keyup

- keydown: cuando se presiona una tecla.
- keyup: cuando se suelta una tecla.

#### 📄 HTML:
```html
<input type="text" id="campoTexto" placeholder="Escribe algo...">
```

#### 📜 JavaScript
```js
const campo = document.getElementById('campoTexto');
// Obtenemos el input

campo.addEventListener('keydown', (e) => {
  // Evento al presionar tecla
  console.log('Tecla presionada', e.key);
});

campo.addEventListener('keyup', (e) => {
  // Evento al soltar tecla
  console.log('Tecla soltada', e.key);
});
```

---

# 🧩 Ejercicios prácticos

### 1. Crear un botón que cambie su propio texto al hacer clic

#### 📄 HTML:
```html
<button id="cambiarTexto">Haz clic aquí</button>
```

🗒️ Objetivo:
- Al hacer clic, cambiar el texto del botón a "¡Gracias!"

### 2. Crear múltiples botones y mostrar cuál fue clickeado

#### 📄 HTML:
```html
<button class="botonNombre">Botón A</button>
<button class="botonNombre">Botón B</button>
<button class="botonNombre">Botón C</button>
```

🗒️ Objetivo:
- Al hacer clic, mostrar una alerta con el texto del botón usando this.textContent

### 3. Crear una función externa para reutilizar el manejador de eventos

#### 📄 HTML:
```html
<button class="btn">1</button>
<button class="btn">2</button>
<button class="btn">3</button>
```

🗒️ Objetivo:
- Crear una función llamada cambiarColor y pasarla como referencia al addEventListener.

### 4. Mostrar mensaje al hacer doble clic

#### 📄 HTML:
```html
<p id="parrafo">Haz doble clic aquí</p>
```

🗒️ Objetivo:
- Mostrar una alerta al hacer doble clic que diga "¡Hiciste doble click!"
- **reto** cambiar el texto del botón al hacer doble click y reiniciarlo al texto original.

### 5. Cambiar color de fondo al pasar el mouse

#### 📄 HTML:
```html
<div id="area" style="width:150px; height:150px; background-color: coral;"></div>
```

🗒️ Objetivo:
- Cambiar el color al entrar y salir con el mouse
- **reto** Crea una función que maneje ambos eventos y dependiendo del tipo `(event.type)` puedas usar tanto `mouseover` como `mouseout`. `Pista`: Puedes reutilizar la misma funcion en el `addEventListener`.

### 6. Mostrar tecla presionada en consola

#### 📄 HTML:
```html
<input type="text" id="entrada" placeholder="Presiona teclas...">
```

🗒️ Objetivo:
- Mostrar por consola qué tecla se presiona y se suelta
