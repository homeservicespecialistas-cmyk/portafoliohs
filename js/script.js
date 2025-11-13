$(function() {
  var $book = $('#flipbook-container');

  // Inicializa el flipbook
  $book.bookblock({
    speed: 800,
    shadowSides: 0.8,
    shadowFlip: 0.6
  });

  // Sonido al pasar página
  var pageSound = new Audio('sounds/pasar-pagina.mp3');

  function playSound() {
    pageSound.currentTime = 0;
    pageSound.play().catch(() => {});
  }

  // Navegación
  $('#bb-prev').on('click', function() {
    $book.bookblock('prev');
    playSound();
    return false;
  });

  $('#bb-next').on('click', function() {
    $book.bookblock('next');
    playSound();
    return false;
  });

  // Swipe en dispositivos táctiles
  $book.children().on({
    swipeleft: function() {
      $book.bookblock('next');
      playSound();
      return false;
    },
    swiperight: function() {
      $book.bookblock('prev');
      playSound();
      return false;
    }
  });
});
