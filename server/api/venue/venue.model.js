'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VenueSchema = new Schema({
  name: String,
  address: String,
  location: String,
  lat: Number,
  lng: Number,
  latLng: { type: [Number], index: '2dsphere', default: [] }, // use [ lat , lng ] format to be consistent with GMaps
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Venue', VenueSchema);