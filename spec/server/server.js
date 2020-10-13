const express = require('express');
const path = require('path');
const db = require('../../database');

const app = express();

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

module.exports = app;