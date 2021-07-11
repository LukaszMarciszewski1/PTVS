const mongoose = require('mongoose')

const VideoSchema = mongoose.Schema({
  title: String,
  description: String,
  time: String,
  category: String,
  img: String,
  move: String,
})

const Videos = mongoose.model('Videos', VideoSchema);

module.exports = Videos