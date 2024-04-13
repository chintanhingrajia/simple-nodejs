var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var path = require('path');
var router = require('./route');

//Add Route file with app
app.use('/', router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

http.listen(5000, function () {
    console.log('listening on *:5000');
});
