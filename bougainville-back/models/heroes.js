const mongoose = require('mongoose');

const heroesSchema = mongoose.Schema({
  userId: { type: String, required: false},
  background: { type: String, required: false },
  PNJPicture: { type: String, required: false },
  PNJSentence: { type: String, required: false },
  option1: { type: String, required: false },
  option2: { type: String, required: false },
  option3: { type: String, required: false },
  saveScene: { type: Number, required: false}
});

module.exports = mongoose.model('Heroes', heroesSchema);