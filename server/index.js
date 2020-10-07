const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/api/productImages', (req, res) => {
  const id = req.query.productId;

  db.getProductImages(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.status = 200;
      res.send(results);
      res.end();
    }
  });
});
