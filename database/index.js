const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productImages');

const db = mongoose.connection;
db.on('error', () => { console.error.bind(console, 'connection error:'); });
db.once('open', () => { console.log('connected to db!'); });
