document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle'); // Adicionado ponto
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');   // Adicionado ponto
    const icon = document.querySelector('#menu__icon');


    toggleButton.addEventListener('click', function () {

        mobileMenu.classList.toggle('active');
        icon.classList.add('fade-out');

        setTimeout(() => {
         
          if (mobileMenu.classList.contains('active')) {
              icon.classList.remove('fa-bars'); 
              icon.classList.add('fa-times');  
          } else {
              icon.classList.remove('fa-times'); 
              icon.classList.add('fa-bars');     
          }

      }, 300);

    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      });


});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
});

