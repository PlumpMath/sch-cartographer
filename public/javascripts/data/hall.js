var Hall = Backbone.Model.extend({

  initialize: function() {
    this.view = new HallView();
    this.view.model = this;
    this.view.render();
  },

  toSQL: function() {
    return "update hall set tooltipXpos = " + this.get('x') + ", tooltipYpos = " + this.get('y') 
      + ", description = '" + this.get('description') + "' where label like '" + this.get('name') + "';\n";
  }

});

var HallList = Backbone.Collection.extend({
  model: Hall,

  disableOthers: function(cid) {
    this.each(function(hall) {
      if(hall.cid != cid) {
        hall.view.deselect();
      }
    });
  },

  toSQL: function() {
    return this.reduce(function(sql, hall) {
      return sql + hall.toSQL();
    }, '');
  }

});
