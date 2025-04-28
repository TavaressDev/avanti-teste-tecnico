  document.addEventListener('DOMContentLoaded', function() {
    // Módulo do Swiper
    const initSwipers = () => {
      const swiperConfig = {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        },
        breakpoints: {
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          992: { slidesPerView: 4, spaceBetween: 15 },
          1200: { slidesPerView: 5, spaceBetween: 20 }
        }
      };

      const allSwipers = document.querySelectorAll('.mySwiper');
      const swiperInstances = [];
      
      allSwipers.forEach((swiperEl) => {
        const container = swiperEl.closest('.swiper-container');
        const config = {
          ...swiperConfig,
          navigation: {
            nextEl: container.querySelector('.custom-next'),
            prevEl: container.querySelector('.custom-prev'),
          },
          pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true,
          }
        };
        
        swiperInstances.push(new Swiper(swiperEl, config));
      });

      return swiperInstances;
    };


    // Função para verificar overflow
    const checkOverflow = () => {
      if (window.innerWidth <= 768) {
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
          if (el.scrollWidth > document.documentElement.clientWidth) {
            el.style.maxWidth = '100%';
            el.style.overflowX = 'hidden';
          }
        });
      }
    };

    // Inicialização de todos os módulos
    const swiperInstances = initSwipers();
    initDepartamentosMenu();
    initMobileFooter();
    checkOverflow();

    // Redimensionamento
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        swiperInstances.forEach(swiper => {
          swiper.update();
          swiper.updateSlides();
          swiper.updateSize();
          swiper.updateSlidesClasses();
        });
        checkOverflow();
      }, 250);
    });
  });