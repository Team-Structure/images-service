const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  fullSizeURL: String,
  thumbnailURL: String,
});

const productImage = new mongoose.Schema({
  images: [imageSchema],
});

module.exports.productImage = mongoose.model('productImage', productImage);
