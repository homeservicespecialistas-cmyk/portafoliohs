// Inicializar sonido con Howler.js
const soundFlip = new Howl({
  src: ['sounds/pasar-pagina.mp3'],
  volume: 0.6
});

// Crear Flipbook
document.addEventListener('DOMContentLoaded', function() {
  const flipbook = new DFLIP({
    source: [
      { html: '<div style="padding:40px;">Portada</div>' },
      { html: '<div style="padding:40px;">Página 1<br>Contenido...</div>' },
      { html: '<div style="padding:40px;">Página 2<br>Más contenido...</div>' },
      { html: '<div style="padding:40px;">Contraportada</div>' }
    ],
    backgroundColor: "#fff",
    height: 600,
    duration: 800,
    controls: "zoom,fullscreen,page,share",
    direction: "LTR" // izquierda a derecha
  });

  // Reproducir sonido cada vez que se pasa página
  flipbook.on('flip', function() {
    soundFlip.play();
  });
});
