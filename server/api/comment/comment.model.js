'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserSchema = mongoose.model('User');

var CommentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  comment: String,
  active: Boolean,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);