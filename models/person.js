const mongoose = require('mongoose');



const personSchema = new mongoose.Schema({
    image: String,
    name: String,
    occupation: String,
    birthPlace: String,
    about: String,
  });

  const Person = mongoose.model('Person', personSchema);
  module.exports = Person