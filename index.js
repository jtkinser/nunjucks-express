var express = require('express');
var app = express();

// INSTALL Nunjucks
var nunjucks = require('nunjucks');

// Create nunjucks enviorment
var nunjucksEnv = nunjucks.configure('./views', { express: app });

// DEMO: add simple filter method for logging in the views
nunjucksEnv.addFilter('log', console.log);

// Tell express which engine to use
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.get('/', function (req, res) {
  var data = {
      title: 'Express + Nunjucks Demo App',
      info: {
          title: 'Express + Nunjucks',
          description: 'Simple app showing how to setup nunjucks for an express.js app.'
      }
  };

  // render page with nunjucks
  // INFO: See views/layout.html and views/main/index.html for templates
  res.render('main/index', data);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
