var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.set('view engine','pug');
app.set('views','./views');

mongoose.connect('mongodb://localhost:27017/amit',{ useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});

var personSchema = mongoose.Schema({
  name : String,
  age : Number,
  gender : String
});

var Person = mongoose.model("Person",personSchema);

var newPerson = Person({
  name : 'Amit',
  age : 100,
  gender : 'M'
});

newPerson.save(function(err, Person){
  if(err)
     console.log("NOT ADDED");
  else
     console.log("ADDED");
});

app.listen(8080);