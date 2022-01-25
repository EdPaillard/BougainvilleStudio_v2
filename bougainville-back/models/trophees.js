const mongoose = require('mongoose');

const tropheesSchema = mongoose.Schema({
  userId: { type: String, required: true},
  entitle: { type: String, required: true },
  resume: { type: String, required: true },
  picture: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Trophees', tropheesSchema);