// require express
const express = require('express');
const app = express();
// require mustache-express
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
// require file system to read users.json file
const fs = require('fs');

fs.readFile('users.json', (err, data) => {
  let users = JSON.parse(data).users;
  // mustache express
  app.get('/robots', function (req, res) {
    res.render('index', { users });
  });
});

// mustache express
// app.get('/', function (req, res) {
//   res.render('index', { userName: 'Sam' });
// });

// server
app.listen(3000, function () {
  console.log('Successfully started express application!')
});
