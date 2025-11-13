$(function() {
  var $bookBlock = $('#bb-bookblock');
  var $navNext = $('#bb-nav-next');
  var $navPrev = $('#bb-nav-prev');

  $bookBlock.bookblock({
    speed: 800,
    shadowSides: 0.8,
    shadowFlip: 0.4
  });

  $navNext.on('click', function() {
    $bookBlock.bookblock('next');
    return false;
  });

  $navPrev.on('click', function() {
    $bookBlock.bookblock('prev');
    return false;
  });
});
