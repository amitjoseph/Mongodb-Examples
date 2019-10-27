var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amit',{ useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});


app.listen(8080);