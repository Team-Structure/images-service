const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getProductImages = (productId, callback) => {
  const q = `SELECT * FROM product_images WHERE product_id = ${productId}`;

  connection.query(q, (err, results) => {
    if (err) {
      console.log('getProductImages error');
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getProductImages };
