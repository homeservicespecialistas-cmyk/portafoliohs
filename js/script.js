$(function() {

  var Page = (function() {

    var config = {
      $bookBlock: $('#bb-bookblock'),
      $navNext: $('#bb-nav-next'),
      $navPrev: $('#bb-nav-prev')
    };

    var init = function() {
      config.$bookBlock.bookblock({
        speed: 800,
        shadowSides: 0.8,
        shadowFlip: 0.4
      });
      initEvents();
    };

    var initEvents = function() {
      var $slides = config.$bookBlock.children();

      // Navegación con botones
      config.$navNext.on('click touchstart', function() {
        config.$bookBlock.bookblock('next');
        return false;
      });

      config.$navPrev.on('click touchstart', function() {
        config.$bookBlock.bookblock('prev');
        return false;
      });

      // Navegación con teclado
      $(document).keydown(function(e) {
        var key = e.which;
        if (key === 37) config.$bookBlock.bookblock('prev');
        if (key === 39) config.$bookBlock.bookblock('next');
      });
    };

    return { init: init };

  })();

  Page.init();
});
