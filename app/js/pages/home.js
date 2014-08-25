'use strict';

/* global app */
var $ = require('../shims/jquery');
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
// var QuoteBoxView = require('../views/quote-box');

module.exports = View.extend({
  pageTitle: 'Monica Macovei | Home',
  template: templates.pages.home,
  render: function () {
    var self = this;
    this.$el.html(this.template());

    // var cols = this.$('.call-to-action .column');
    // this.$('.hero, .logo, .quote-box, .social-btns').velocity({
    //   opacity: 0
    // }, {
    //   duration: 0,
    //   display: null,
    //   'complete': function () {
    //     $(this).velocity(
    //       'transition.slideUpIn',
    //       { stagger: 250 }
    //     );
    //   }
    // });
    // cols.velocity({ opacity: 0 }, { duration: 0, display: null });
    // this.$('.call-to-action .column .btn').waypoint(function () {
    //   cols.velocity('callout.shake', { stagger: 250, display: null });
    // });

    // this.quoteBoxView = new QuoteBoxView({
    //   model: new Backbone.Model({
    //     content: 'Monica Macovei, apărătoarea iconică a libertăților românilor.',
    //     author: 'Le Monde',
    //     authorLogo: 'assets/img/logo-le-monde.png'
    //   }),
    //   el: this.$('[role="quote-box"]')
    // });

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });
    return this;
  }
});
