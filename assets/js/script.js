// Cuando el documento esté listo
// (no necesariamente el contenido de las etiquetas)

$(document).ready(function() {
  // Ejecuta esto
  console.time('jQuery')
  $('form').on("submit", function() {
    console.log('Formulario1 enviado 🕊️')
  })
  console.timeEnd('jQuery')

  $('#agrandarTexto').on("click", function() {
    // elemento.css("propiedad", "valor")
    $('#parrafoObjetivoAgrandar').css({
      'color': 'red',
      'fontSize': '25px'
    }).toggle()
  })

  $('#targetThis').on('mouseenter', function() {
    console.log(this)
    $(this).css({
      'color': 'blue',
      'fontSize': '4rem'
    }).bounce()
  })
})
