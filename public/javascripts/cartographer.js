Zepto(function($) {

  window.app = {};

  app.halls = new HallList();

  app.map = new Map();
  app.dropbox = new Dropbox();
  app.settings = new Settings();

  $('#export').on('click', function(e) {
    $('#output').val( app.halls.toSQL() );
    $('#output-container').show();
    e.preventDefault();
  });

  $('#close-output').on('click', function(e) {
    $('#output-container').hide();
    $('#output').val('');
  });

});

