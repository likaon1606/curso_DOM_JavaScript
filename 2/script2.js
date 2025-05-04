const btnCambiar = document.getElementById('btnCambiar')
const btnCambiarImagen = document.getElementById('btnCambiarImagen')

const info = document.getElementById('info')
const imagen = document.getElementById('logo')

btnCambiar.addEventListener('click', () => {
  info.textContent = 'Contenido Cargado';
  btnCambiar.textContent = 'Ya cambió'
})

btnCambiarImagen.addEventListener('click', () => {
  imagen.setAttribute('src', './assets/react.ico')
})