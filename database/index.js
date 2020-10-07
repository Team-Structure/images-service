const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getProductImages = function (callback, productId) {
  const q = `SELECT * FROM productImages WHERE product_id = ${productId}`;

  connection.query(q, (err, results) => {
    if (err) {
      console.log('getProductImages error');
      callback(err, null);
    } else {
      console.log('getProductImages success');
      callback(null, results);
    }
  });
};

module.exports = { getProductImages };
