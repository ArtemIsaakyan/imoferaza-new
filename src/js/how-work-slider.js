import Swiper from 'swiper';
import 'swiper/css';

 new Swiper('.how-work-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    mousewheel: {
      invert: true,
    },
    breakpoints: {
      1336: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });