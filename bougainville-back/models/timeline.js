const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: Array, required: true },
  userId: { type: String, required: true }
});

module.exports = mongoose.model('Timeline', timelineSchema);