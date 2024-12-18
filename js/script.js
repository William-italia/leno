document.addEventListener('DOMContentLoaded', function () {

  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle'); // Adicionado ponto
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');   // Adicionado ponto
  const icon = document.querySelector('#menu__icon');
  const openVideo = document.querySelector('.preview__video-button');
  const closeVideo = document.querySelector('.modal__close-button');
  const modal = document.querySelector('.modal');
  const videoPlayer = document.getElementById('videoPlayer')

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



  openVideo.addEventListener('click', function () {

    modal.classList.add('active');
    videoPlayer.src = 'https://www.youtube.com/embed/yKCAna4SrOA?si=hSvl7YR7DgcphW8h';


    closeVideo.addEventListener('click', function () {

      modal.classList.remove('active');
      videoPlayer.src = '';
      
    });
    
    window.addEventListener('click', function (event) {
      if(event.target == modal) {
        modal.classList.remove('active');
        videoPlayer.src = '';
        }
    })
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