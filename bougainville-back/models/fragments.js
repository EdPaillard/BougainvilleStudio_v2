const mongoose = require('mongoose');

const fragmentsSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  miniature: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Fragments', fragmentsSchema);