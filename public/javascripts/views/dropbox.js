var Dropbox = Backbone.View.extend({

  events: {
    'dragenter': 'doNothing',
    'dragover': 'doNothing',
    'drop': 'drop'
  },

  initialize: function() {
    this.setElement($('#container'));
  },

  doNothing: function(e) {
    e.stopPropagation();
    e.preventDefault();
  },

  drop: function(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    var file = dt.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      window.app.map.set(e.target.result);
      $('#export').show();
    };

    reader.readAsDataURL(file);
  }

});
