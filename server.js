var express = require('express');
var app = express();
var  greeted = [];

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');

});

// create a route
app.get('/greetings/:name', function (req, res) {
  var nameValue = req.params.name;
 res.send('Hello '+nameValue);
 greeted.push(nameValue);
});


// create a route
app.get('/greeted', function (req, res) {
 res.send(greeted);
});

// create a route
app.get("/counter/:name", function (req, res) {
  var greetedNames =[];
  var nameValue = req.params.name;
greeted.forEach(function(nameValue) {
  if(greetedNames[nameValue] === undefined) {
    greetedNames[nameValue] = 0;
  }
    greetedNames[nameValue] = greetedNames[nameValue] + 1;
});
console.log(greetedNames);


res.send(req.params.name  + " has been greeted " + greetedNames[nameValue] + " time(s)");
 });



//start the server
var server = app.listen(3000, function () {

var host = server.address().address;
var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
