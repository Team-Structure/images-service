import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductImagesService from './modules/app';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/products/:id(\d+)" component={ProductImagesService} />
    </div>
  </Router>,
  document.getElementById('productImagesService'),
);
