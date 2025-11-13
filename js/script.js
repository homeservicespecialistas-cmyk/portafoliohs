const swiper = new Swiper('.swiper', {
  effect: 'flip',
  speed: 900,
  slidesPerView: 1,
  grabCursor: true,
  flipEffect: {
    slideShadows: true,
    limitRotation: true
  },
  on: {
    init: function() {
      fixTransformOrigins(this);
    },
    slideChangeTransitionStart: function() {
      fixTransformOrigins(this);
    }
  }
});

// Ajuste para que gire desde el borde
function fixTransformOrigins(swiper) {
  const slides = swiper.slides;
  slides.forEach(s => s.style.transformOrigin = 'center center');

  const idx = swiper.activeIndex;
  const prev = swiper.previousIndex;

  if (idx > prev) {
    if (slides[prev]) slides[prev].style.transformOrigin = '100% 50%';
    if (slides[idx]) slides[idx].style.transformOrigin = '0% 50%';
  } else if (idx < prev) {
    if (slides[prev]) slides[prev].style.transformOrigin = '0% 50%';
    if (slides[idx]) slides[idx].style.transformOrigin = '100% 50%';
  }
}

document.getElementById('next').addEventListener('click', () => swiper.slideNext());
document.getElementById('prev').addEventListener('click', () => swiper.slidePrev());
