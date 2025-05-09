# 📅 Día 4 – Eventos (click, mouseover, input, etc.)

## 🧠 Conceptos clave de hoy:

* Los eventos permiten ejecutar código cuando el usuario interactúa con elementos del DOM. Lo más común: hacer clic, pasar el mouse, escribir algo, mover el cursor, etc.

### 📌 Cómo se usan:

- `element.addEventListener(tipoDeEvento, función)`
- Esto “escucha” cuando ocurre un evento y ejecuta una función.

* 📘 Métodos y ejemplos:

- `click` – cuando haces clic en un elemento

```js
const btn = document.getElementById('miBoton');

btn.addEventListener('click', () => {
alert('Hiciste clic');
});
```
`mouseover / mouseout` – cuando pasas o quitas el mouse de un elemento

```js
const caja = document.getElementById('miCaja');

caja.addEventListener('mouseover', () => {
caja.style.backgroundColor = 'yellow';
});

caja.addEventListener('mouseout', () => {
caja.style.backgroundColor = 'white';
});
```
`input` – cuando se escribe o cambia algo en un input de texto

```js
const nombreInput = document.getElementById('nombre');

nombreInput.addEventListener('input', () => {
console.log('Valor actual:', nombreInput.value);
});
```
`change` – cuando cambias el valor (ideal para selects o checkbox)

```js
const selector = document.getElementById('miSelect');

selector.addEventListener('change', () => {
console.log('Opción seleccionada:', selector.value);
});
```
`submit` – cuando se envía un formulario

```js
const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
e.preventDefault(); // evita que recargue la página
alert('Formulario enviado');
});
```



## 🧪 Ejercicio práctico:

- Crea un botón que diga “Cambiar color”.
- Al hacer clic, cambia el fondo del body a otro color.

- Crea una caja (div cuadrado).
- Al pasar el mouse por encima, cambia el texto interno a “¡Hola!”.
- Cuando se quite el mouse, vuelve a “Pasa el mouse aquí”.

- Crea un input. Cada vez que escribas, muestra en un párrafo debajo lo que estás escribiendo.

* `(Bonus)` Crea un formulario con un input y botón. Al enviarlo, muestra una alerta con el texto del input y limpia el campo.