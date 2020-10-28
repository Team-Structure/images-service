const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const port = 3003;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/api/productImages', (req, res) => {
  const id = req.query.productId;

  db.getProductImages(id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else if (!results.length) {
      res.status(404).end();
    } else {
      res.status(200).send(results).end();
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
