const mongoose = require('mongoose');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  userId: String,
  name: String,
  image: String,
  link: String,
  uri: String,
  data: Object,
  favorite: {
    type: Boolean,
    default: false,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note',
    },
  ],
  created: Date,
  updated: Date,
});

module.exports = mongoose.model('Recipes', recipeSchema);
