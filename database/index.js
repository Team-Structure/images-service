const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('connected to db!') });

let imageSchema = new mongoose.Schema({
  fullSizeURL: String,
  thumbnailURL: String
})

let productImage = new mongoose.Schema({
  images: [imageSchema]
})

let sellerImage = new mongoose.Schema({
  images: imageSchema
})

let ProductImage = mongoose.model('ProductImage', productImage)

let testProduct = {
  fullSizeURL: 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_1.png',
  thumbnailURL: 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_1thumb.png'
}
