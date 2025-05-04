const btnColorBody = document.getElementById('btnColorBody');
const bodyTag = document.querySelector('body')

btnColorBody.addEventListener('click', () => {
  bodyTag.style.backgroundColor = "orange"
})

/***** div cuadrado */

const divCuadrado = document.getElementById('cuadrado')

divCuadrado.addEventListener('mouseover', () => {
  divCuadrado.textContent = '¡Hola!'
})
divCuadrado.addEventListener('mouseout', () => {
  divCuadrado.textContent = 'Pasa el mouse aquí'
})

/**INPUT */


const inputTag = document.getElementById('inputId');
const inputWrite = document.getElementById('inputWrite');

inputTag.addEventListener('input', () => {
  inputWrite.textContent = inputTag.value
})

/**BONUS */

const formulario = document.getElementById('formulario');
const btnForm = document.getElementById('btnForm');
const inputForm = document.getElementById('inputForm');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(inputForm.value)
  inputForm.value = ''
})
