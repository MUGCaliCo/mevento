'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = mongoose.model('User'),
    Venue = mongoose.model('Venue'),
    Comment = mongoose.model('Comment');


var EventSchema = new Schema({
  title: String,
  slug: String,
  venue: { type: Schema.Types.ObjectId, ref: 'Venue' },
  content: String,
  categories: [ String ],
  assistants: [ User ],
  speakers: [ User ],
  comments: [ Comment ],
  info: String,
  active: Boolean
});

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
}

/**
 * Validations
 */

// Validate empty title
EventSchema
  .path('title')
  .validate(function(title) {
    return title != '';
  }, 'Title cannot be blank');

/**
 * Pre-save hook
 */
EventSchema
  .pre('save', function(next) {
    this.slug = slugify(this.title);
    next();
  });

module.exports = mongoose.model('Event', EventSchema);