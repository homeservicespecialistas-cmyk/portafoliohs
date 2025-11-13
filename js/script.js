jQuery(document).ready(function($) {

  // Inicializar sonido al pasar página
  const sonidoPagina = new Howl({
    src: ['sounds/pasar-pagina.mp3'],
    volume: 0.7
  });

  // Inicializar la revista con las opciones correctas
  $("#revista").booklet({
    width: 1000,
    height: 600,
    speed: 800,
    pageNumbers: true,
    arrows: true,
    mouse: true,
    closed: false,
    autoCenter: true,
    shadows: true,
    overlays: true,
    hover: true,
    zoom: false,
    autoplay: false,

    // Corrige orden de las páginas (de izquierda a derecha)
    direction: "LTR", // Left to Right

    // Reproduce sonido al pasar
    next: function() { sonidoPagina.play(); },
    prev: function() { sonidoPagina.play(); }
  });

});
