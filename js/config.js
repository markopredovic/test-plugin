requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    'jquery': 'jquery-1.11.2.min',
    'bootstrap': 'bootstrap.min',
    'swiper': 'swiper.min',
    'app': '../app'
  },
  shim: {
    'bootstrap': ['jquery']
  }
})
