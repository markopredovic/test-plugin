define(['swiper'], function() {
  //vertical swiper
  new Swiper('.l-swiper-vertical .swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
  });

  //mousewhell control
  new Swiper('.l-swiper-mousewheel .swiper-container', {
      pagination: '.swiper-pagination',
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      mousewheelControl: true
  });

  //scroll container
  new Swiper('.l-scroll-container .swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });

    //slideable menu
    var toggleMenu = function(){
    if (swiper.previousIndex == 0)
        swiper.slidePrev()
    }
  , menuButton = document.getElementsByClassName('menu-button')[0]
  , swiper = new Swiper('.l-slideable-menu .swiper-container', {
    slidesPerView: 'auto'
    , initialSlide: 1
    , resistanceRatio: .00000000000001
    , onSlideChangeStart: function(slider) {
      if (slider.activeIndex == 0) {
        menuButton.classList.add('cross')
        menuButton.removeEventListener('click', toggleMenu, false)
      } else
        menuButton.classList.remove('cross')
    }
    , onSlideChangeEnd: function(slider) {
      if (slider.activeIndex == 0)
        menuButton.removeEventListener('click', toggleMenu, false)
      else
        menuButton.addEventListener('click', toggleMenu, false)
    }
    , slideToClickedSlide: true
  })
  
});
