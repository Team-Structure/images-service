const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const imagesPerProduct = {
  1: 4, 2: 13, 3: 7, 4: 1, 5: 12, 6: 3, 7: 12, 8: 6, 9: 5, 10: 10,
  11: 2, 12: 11, 13: 1, 14: 8, 15: 6, 16: 9, 17: 9, 18: 13, 19: 6, 20: 8,
  21: 10, 22: 7, 23: 6, 24: 4, 25: 8, 26: 4, 27: 12, 28: 15, 29: 3, 30: 6,
  31: 2, 32: 5, 33: 7, 34: 7, 35: 7, 36: 11, 37: 2, 38: 9, 39: 8, 40: 12,
  41: 4, 42: 9, 43: 12, 44: 1, 45: 6, 46: 4, 47: 11, 48: 13, 49: 3, 50: 15,
};

const seed = () => {
  const uniqProds = 50;
  for (let i = 1; i <= 100; i += 1) {
    let index = i % uniqProds !== 0 ? i % uniqProds : uniqProds;
    const imageCount = imagesPerProduct[index];

    for (let j = 1; j <= imageCount; j += 1) {
      const q = `INSERT into product_images (id, product_id, s3_url) VALUES (null, ${i}, 'https://teamstructureshopping.s3.amazonaws.com/id${index}/image_${j}.png')`;

      connection.query(q, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
  }
  connection.end();
};

seed();
