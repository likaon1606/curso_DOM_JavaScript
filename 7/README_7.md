# 📅 Día 7 – Eventos del DOM y this

## 🧠 Conceptos clave

### Hoy aprenderás a:

- Qué es un evento en JavaScript.
- Usar addEventListener para escuchar eventos.
- Diferencia entre onclick y addEventListener.
- El valor de "this" en los manejadores de eventos.
- Cómo usar funciones separadas para manejar eventos.

---

# 🧪 Ejemplos explicados

## Usar addEventListener en lugar de onclick

#### 📄 HTML:
```html
<button id="btnSaludo">Saludar</button>
```

#### 📜 JavaScript (comentado):
```js
// Obtenemos el botón
const btnSaludo = document.getElementById('btnSaludo');

// Escuchamos el evento click con addEventListener
btnSaludo.addEventListener('click', () => {
  alert('¡Hola desde addEventListener!');
});
```

---

## Comparación: onclick vs addEventListener

#### 📄 HTML:
```html
<button id="btn1">Con onclick</button>
<button id="btn2">Con addEventListener</button>
```

#### 📜 JavaScript (comentado):
```js
// onclick reemplaza cualquier función anterior
btn1.onclick = () => {
  alert('Esto viene de onclick');
};

// addEventListener permite múltiples funciones
btn2.addEventListener('click', () => {
  alert('Primera función');
});

btn2.addEventListener('click', () => {
  alert('Segunda función');
});
```

---

## Usando "this" dentro del evento

#### 📄 HTML:
```html
<button class="btnColor">Rojo</button>
<button class="btnColor">Azul</button>
<button class="btnColor">Verde</button>
```

#### 📜 JavaScript (comentado):
```js
// Obtenemos todos los botones con la clase "btnColor"
const botones = document.querySelectorAll('.btnColor');

// Recorremos y agregamos evento a cada uno
botones.forEach(boton => {
  boton.addEventListener('click', function () {
    // "this" se refiere al botón que fue clickeado
    this.style.backgroundColor = this.textContent.toLowerCase();
  });
});
```

---

# 🧩 Ejercicios prácticos

### 1. Crear un botón que cambie su propio texto al hacer clic

#### 📄 HTML:
```html
<button id="cambiarTexto">Haz clic aquí</button>
```

📝 Objetivo:
- Al hacer clic, cambiar el texto del botón a "¡Gracias!"

---

### 2. Crear múltiples botones y mostrar cuál fue clickeado

#### 📄 HTML:
```html
<button class="botonNombre">Botón A</button>
<button class="botonNombre">Botón B</button>
<button class="botonNombre">Botón C</button>
```

📝 Objetivo:
- Al hacer clic, mostrar una alerta con el texto del botón usando this.textContent

---

### 3. Crear una función externa para reutilizar el manejador de eventos

#### 📄 HTML:
```html
<button class="btn">1</button>
<button class="btn">2</button>
<button class="btn">3</button>
```

📝 Objetivo:
- Crear una función llamada cambiarColor y pasarla como referencia al addEventListener.

#### 📜 JavaScript sugerido:
```js
function cambiarColor(e) {
  e.target.style.background = 'lightblue';
}

document.querySelectorAll('.btn').forEach(b => {
  b.addEventListener('click', cambiarColor);
});
