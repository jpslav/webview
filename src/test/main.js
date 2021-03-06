(function () {
  'use strict';

  // Load the config
  require({
    baseUrl: '../scripts/',

    paths: {
      test: '../test',
      jquery: '../../bower_components/jquery/jquery',
      mockjax: '../../bower_components/jquery-mockjax/jquery.mockjax'
    },

    shim: {
      mockjax: ['jquery']
    }
  }, ['config'], function () {
    // Load the mock data
    require(['cs!test/mock'], function () {
      // Load the application after the config
      require(['cs!loader'], function (loader) {
        loader.init({
          test: true
        });
      });
    });
  });

  /* If an error occurs in requirejs then change the loading HTML. */
  require.onError = function (err) {
    throw err;
  };

})();
