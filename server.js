
var express = require('express');
var app = express();

app.use(express.static('web'));

app.listen(8080);

