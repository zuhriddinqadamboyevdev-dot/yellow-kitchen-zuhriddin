const swiper = new Swiper(".resSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

   pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
