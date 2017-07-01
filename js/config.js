requirejs.config({
  baseUrl: 'js/vendor',
  paths: {
    'jquery': 'jquery-1.11.2.min',
    'bootstrap': 'bootstrap.min',
    'app': '../app'
  },
  shim: {
    'bootstrap': 'jquery'
  }
})
