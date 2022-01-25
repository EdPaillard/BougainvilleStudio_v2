// const { Binary } = require('bson');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const usersSchema = mongoose.Schema({
  pseudo: { type: String, required: false, unique: true },
  about: { type: String, required: false },
  profilimg: { type: String, required: false },
  password: { type: String, required: true },
  age: { type: Number, required: false },
  email: { type: String, required: true, unique: true },
  ville: { type: String, required: false },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', usersSchema);