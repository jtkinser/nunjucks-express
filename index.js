var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

var nunjucksEnv = nunjucks.configure('./views', { express: app });

// simple filter method for logging in the views
nunjucksEnv.addFilter('log', console.log);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.get('/', function (req, res) {
  var data = {
      title: 'Demo Express App + Nunjucks',
      info: {
          title: 'Nunjucks + Express',
          description: 'Simple app showing how to setup nunjucks for an express.js app.'
      }
  };
  res.render('main/index', data);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
