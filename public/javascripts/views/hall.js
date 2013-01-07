var HallView = Backbone.View.extend({

  tagName: 'a',
  className: 'hall',

  events: {
    'click': 'select'
  },

  template: '<div class="epicenter"></div>',

  render: function() {
    this.$el.attr('href', '#');
    this.$el.html(this.template).css({
      left: this.model.get('x') - 12,
      top: this.model.get('y') - 12
    });

    $('#map-wrapper').append(this.el);
  },

  select: function(e) {
    app.halls.disableOthers(this.model.cid);
    this.$el.toggleClass('active');
    this.active = !this.active;

    this.active ? this.showDetails() : this.hideDetails();

    e.preventDefault();
  },

  deselect: function() {
    this.active = false;
    this.$el.removeClass('active');
  },

  showDetails: function() {
    app.settings.model = this.model;
    app.settings.setData({
      name: this.model.get('name') || '',
      description: this.model.get('description') || ''
    });
    app.settings.show();
  },

  hideDetails: function() {

  }


});
