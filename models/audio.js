const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  audioType: { type: String },
  description: { type: String },
  link: { type: String },
  credit: { type: [String] },
  releaseDate: { type: String },
  length: { type: String }
});

module.exports = mongoose.model('audios', audioSchema);