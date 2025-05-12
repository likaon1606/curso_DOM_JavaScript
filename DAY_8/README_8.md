# 🗕️ Día 8 – Proyecto Mini DOM Lab: Interacciones completas

## 🧠 Objetivo del día

Construiremos una mini página web interactiva aplicando todo lo aprendido en los días anteriores. Esto te permitirá conectar eventos, manipulación del DOM, clases, estilos y funciones de una forma práctica.

---

## 🧪 Conceptos clave a reforzar

- Selección de elementos (`getElementById`, `querySelector`, etc.)
- Eventos del DOM: `click`, `input`, `mouseover`, `dblclick`, `keyup`, `keydown`
- Estilos dinámicos (`style`, `classList`)
- Funciones manejadoras externas
- Crear y eliminar elementos
- this y event.target

---

## 🎨 HTML Base
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mini DOM Lab</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 id="titulo">👋 Bienvenido a tu Mini DOM Lab</h1>

    <section>
      <input type="text" id="nombreUsuario" placeholder="Escribe tu nombre...">
      <button id="btnSaludo">Saludar</button>
    </section>

    <section>
      <button class="color-btn">Rojo</button>
      <button class="color-btn">Verde</button>
      <button class="color-btn">Azul</button>
    </section>

    <section>
      <button id="agregarItem">Agregar ítem</button>
      <ul id="listaDinamica"></ul>
    </section>

    <section>
      <p id="parrafoDoble">Haz doble clic aquí para cambiarme</p>
    </section>

    <section>
      <div id="cuadro" class="cuadro">Pasa el mouse por aquí</div>
    </section>

    <section>
      <input type="text" id="inputTeclado" placeholder="Escribe algo y observa la consola">
    </section>

    <section>
      <button id="reset">Reiniciar Todo</button>
    </section>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🖌️ CSS Base (styles.css)
```css
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.container {
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  max-width: 600px;
  width: 100%;
}

section {
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background: #007BFF;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0056b3;
}

input {
  padding: 10px;
  width: 80%;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#cuadro {
  width: 100%;
  height: 100px;
  background-color: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  font-weight: bold;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  padding: 10px;
  background: #eee;
  margin-top: 5px;
  border-radius: 5px;
}
```

---

## 🔧 JavaScript (script.js) – Desafíos Interactivos

### Ejercicios sugeridos (¡resuélvelos con JS!):

1. Mostrar una alerta con el nombre ingresado al hacer clic en "Saludar".
2. Cambiar el título `<h1>` por un saludo personalizado con el nombre ingresado.
3. Al hacer clic en un botón de color, cambiar el color de fondo de la página a ese color.
4. Agregar un nuevo ítem a la lista con un texto personalizado "nuevo item".
5. Hacer que el item de la lista pueda eliminarse al hacer doble clic.
6. Cambiar el texto del párrafo al hacer doble clic (y restaurarlo si se vuelve a hacer doble clic).
7. Cambiar el color del `#cuadro` al entrar y salir del mouse (usa `mouseover` y `mouseout`).
8. Mostrar por consola la tecla que se presiona y se suelta en el input.
9. Reutilizar funciones externas para manejar los eventos de color, entrada y saludo.
10. Aplicar clase `.highlight` al botón clicado (y quitarla de los demás).
11. Deshabilitar el botón de saludo si no hay texto en el input.
12. Añadir ítems a la lista solo si el usuario escribió algo distinto a vacío.
13. Al presionar Enter en el campo de nombre, activar el saludo automáticamente.
14. Al presionar Enter en el input de lista, agregar el ítem sin dar click en botón.
15. El botón “Reiniciar Todo” debe:
    - Limpiar todos los inputs
    - Borrar todos los ítems
    - Restaurar el fondo al color inicial
    - Restaurar el texto del h1 y del párrafo


---

## ✅ Recomendación final

¡Este es tu laboratorio final! Intenta escribir cada solución con lo aprendido: reutiliza funciones, aprovecha `addEventListener`, y aplica estilos dinámicamente. ¡Manos al código!
