const yellow = document.getElementById('yellow');
const btnYellow = document.getElementById('btnYellow')

btnYellow.addEventListener('click', () => {
  yellow.style.backgroundColor = 'yellow'
})

//*********** btn **********/

const oculto = document.querySelector('.oculto');
const btnOculto = document.getElementById('btnOculto');

const textoOriginal = btnOculto.textContent; // Guardamos el texto original

btnOculto.addEventListener('click', () => {
  oculto.classList.toggle('oculto');

  // Cambiamos el texto dependiendo de si el div está oculto o no
  if (oculto.classList.contains('oculto')) {
    btnOculto.textContent = textoOriginal;
  } else {
    btnOculto.textContent = 'Ocultar Div';
  }
});


//** COLORS*/

const colors = document.getElementById('colors');
const btnColors = document.getElementById('btnColors');

btnColors.addEventListener('click', () => {

  // guardamos el estado antes del cambio
  const isRed = colors.classList.contains('rojo')

  colors.classList.toggle('rojo', !isRed)
  colors.classList.toggle('azul', isRed)
})

const clases = colors.classList.contains('red')
console.log(clases);


