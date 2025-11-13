const swiper = new Swiper('.mySwiper', {
  effect: 'flip',
  grabCursor: true,
  speed: 900,
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
  allowTouchMove: true, // puedes girar con el dedo
});

// Botones
document.getElementById('next').addEventListener('click', () => swiper.slideNext());
document.getElementById('prev').addEventListener('click', () => swiper.slidePrev());
