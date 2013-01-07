var Map = Backbone.View.extend({

  events: {
    'click': 'addHall'
  },

  initialize: function() {
    this.setElement($('#map'));
  },

  set: function(data) {
    this.el.src = data;
  },

  addHall: function(e) {

    var offset = $('#map-wrapper').offset();
    var positionX = e.pageX - offset.left;
    var positionY = e.pageY - offset.top;

    app.halls.add({ x: positionX, y: positionY });
  }


});
