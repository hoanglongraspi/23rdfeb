const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Image', imageSchema);