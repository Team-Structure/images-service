const mongoose = require('mongoose');
const { ProductImage } = require('./models/productImage');

mongoose.connect('mongodb://localhost/productImages', { useMongoClient: true });

let products = [];

const testImages = {
  fullSizeURL: 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_1.png',
  thumbnailURL: 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_1thumb.png',
};

for (let i = 0; i <= 100; i += 1) {
  let product = [];
  let imageCount = Math.floor(7 * Math.random()) + 4;
  for (let j = 0; j < imageCount; j += 1) {
    product.push(new ProductImage(testImages).save());
  }
  products.push(product);
}
