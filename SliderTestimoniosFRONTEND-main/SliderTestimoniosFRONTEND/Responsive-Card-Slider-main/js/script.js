var swiper = new Swiper(".slide-content", {
  slidesPerView: 2.1, // Ajusta ligeramente para mostrar un poco más de la tercera diapositiva
  spaceBetween: 20, // Ajusta el espacio entre las diapositivas
  loop: true,
  centerSlide: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2.1, // Mantén 2.1 para las pantallas más grandes
      spaceBetween: 20, // Ajusta el espacio entre las diapositivas
    },
    950: {
      slidesPerView: 2.1, // Mantén 2.1 para las pantallas más grandes
      spaceBetween: 20, // Ajusta el espacio entre las diapositivas
    },
  },
});
