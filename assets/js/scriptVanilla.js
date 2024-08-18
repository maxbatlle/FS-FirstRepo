
/**
 * Vanilla JS
 */

// cuando el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
  // ejecuta esto
  
  console.time('Vanilla')
  document.querySelector('form').addEventListener("submit", function() {
    console.log('Formulario2 enviado 🕊️')
  })
  console.timeEnd('Vanilla')
})

