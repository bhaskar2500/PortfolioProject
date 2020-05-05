const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var env = process.env;
var dotenv = require('dotenv').config();
global.base_directory = __dirname;

console.log('-------' + JSON.stringify(dotenv));
// if (process.env.NODE_ENV == 'development') {
app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});

global.routeMiddleWares = [];

var boot = require('./bootup');
routeMiddleWares.forEach(mid => {
  app.use(mid);

})

env.PORT = env['PORT'] || 51071;

app.listen(env.PORT);
console.log(
  '\x1b[32m%s\x1b[0m',
  'Portfolio is running on port ' + env.PORT + ' now'
);


module.exports = app;






