var express = require('express');
var app = express();
var jsonfile = require('jsonfile')
var fs = require("fs");
var file = '/Users/Mike/Desktop/CFI/tidbitsmike/users.json';
var bodyParser = require("body-parser");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('datastuff')); 

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


app.get('/contact', function (req, res) {
   res.sendFile( __dirname + "/" + "contact.html" );
})


 app.get('/getUsers', function(req, res){    
  res.setHeader('Content-Type', 'application/json');
  jsonfile.readFile(file, function(err, obj) {
    console.log(obj);
    res.end(JSON.stringify(obj));
  })
});

 app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

 app.post('/addUser', function(response){
        if (response == 'User already exists') {
            alert("Sorry - we can't add that user, because someone with the same phone number already exists!")
        } else {
            clearFields();
            alert("Successfully added new user!");
        }
    });

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})