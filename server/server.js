const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const controller = require("./controller");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/dictionary');
mongoose.connection.once('open', () => {
  console.log('Connected with dictionary db!!!!!!!!!!!!!!!!!!');
});

app.get('/', controller.getEntries)
app.post('/addentry', controller.addEntry)
app.post('/signin', controller.isUser)
app.post('/signup', controller.addUser)


app.listen(8080, () => {
  console.log("listening on 8080")
})

module.exports = app;
