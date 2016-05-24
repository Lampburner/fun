var express = require("express");
var bodyParser = require("body-parser");
var app = express(); 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Twilio Credentials 
var accountSid = 'AC6e74f888c21bdf1a042d45ee951ff1c5'; 
var authToken = '58edd880cddd24deda243060ec7b8e6d'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

 
app.post('/sendText', function(req, res) {
  var phoneNumber = req.body.phoneNumber;
  var message = req.body.message;

  client.messages.create({
    to: phoneNumber,
    from: "+14843809113",
    body: message
  }, function(err, message) {
    console.log(err);
  });

  res.end("Received POST request at /sendText");
});

app.listen(3000);