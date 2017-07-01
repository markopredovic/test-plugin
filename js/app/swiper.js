define(['swiper'], function() {
  //vertical swiper
  new Swiper('.l-swiper-vertical .swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: 'vertical'
  });
});
