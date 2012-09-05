var Settings = Backbone.View.extend({

  events: {
    'click #close': 'close',
    'click #delete-hall': 'remove'
  },

  initialize: function() {
    this.setElement($('#details'));
  },

  setData: function(data) {
    this.$el.find('#name').val(data.name);
    this.$el.find('#description').val(data.description);
  },

  show: function() {
    this.$el.show();
  },

  close: function(e) {
    this.model.set({
      name: this.$el.find('#name').val(),
      description: this.$el.find('#description').val()
    });
    this.$el.hide();
    this.model.view.deselect();

    e.preventDefault();
  },

  remove: function(e) {
    this.$el.hide();
    this.model.view.remove();
    app.halls.remove(this.model);
    e.preventDefault();
  }

});
