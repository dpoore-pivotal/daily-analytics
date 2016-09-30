var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/c3-0.4.11"));
app.use(express.static(__dirname + "/css"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
