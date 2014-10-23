'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');
var _ = require('lodash');
var markers = require('../lib/locations-romania.json');
markers = _.sortBy(markers, 'title');

var wwMarkers = require('../lib/locations-worldwide.json');
wwMarkers = _.sortBy(wwMarkers, 'title');


module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Voluntariat',
  pageDescription: '',
  pageKeywords: '',
  pageUrl: '/strange-semnaturi/',
  template: templates.pages.voluntariat,

  render: function () {
    this.$el.html(this.template({
      markers: markers,
      wwMarkers: wwMarkers
    }));
    this.romaniaCoords = {
      latitude: 45.94,
      longitude: 25.00
    };
    this.wwCoords = {
      latitude: 35.7466317,
      longitude: -39.5317294
    };
    this.generateMap();
    return this;
  },

  events: {
    'click #romaniaCenters': 'addMarkersRomania',
    'click #worldWideCenters': 'addMarkersWW'
  },

  generateMap: function () {
    var lat = this.romaniaCoords.latitude;
    var long = this.romaniaCoords.longitude;
    this.map = new window.GMaps({
      el: this.$('#map')[0],
      lat: lat,
      lng: long,
      width: '100%',
      height: '25em',
      zoom: 6
    });
    this.addMarkersRomania();
    this.addMarkersWW();

    var self = this;
    setTimeout(function () {
      self.map.refresh();
      self.map.setCenter(self.romaniaCoords.latitude, self.romaniaCoords.longitude);
    }, 1);
  },

  addMarkersRomania: function () {
    var map = this.map;
    map.setCenter(this.romaniaCoords.latitude, this.romaniaCoords.longitude);
    map.setZoom(6);
    for (var i in markers) {
      if (markers.hasOwnProperty(i)) {
        map.addMarker(markers[i]);
      }
    }
  },

  addMarkersWW: function () {
    var map = this.map;
    map.setCenter(this.romaniaCoords.latitude, this.romaniaCoords.longitude);
    map.setZoom(6);
    for (var i in wwMarkers) {
      if (wwMarkers.hasOwnProperty(i)) {
        map.addMarker(wwMarkers[i]);
      }
    }
  }

});
