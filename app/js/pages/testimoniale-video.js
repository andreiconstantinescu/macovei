'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var videos = require('../lib/testimoniale-video.json');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Susținători',
  template: templates.pages.testimonialeVideo,
  render: function () {
    this.$el.html(this.template({
      videos: videos
    }));
    return this;
  }
});
