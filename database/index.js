const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const hardCode = require('./hardCode.js');

const connection = mysql.createConnection(mysqlConfig);

const getProductImages = (productId, callback) => {
  const q = `SELECT * FROM product_images WHERE product_id = ${productId}`;

  connection.query(q, (err, results) => {
    if (err) {
      console.log('getProductImages error');
      if (productId === 1) {
        console.log('Falling back on hardcoded data for id 1');
        callback(null, hardCode.iD1);
      }
      if (productId === 2) {
        console.log('Falling back on hardcoded data for id 3');
        callback(null, hardCode.iD2);
      } else {
        callback(err, hardCode.backup);
      }
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getProductImages };
