// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Marvel API wrapper Intialization
var api = require('marvel-api');

var marvel = api.createClient({
  publicKey: process.env.PUBLIC_KEY
, privateKey: process.env.PRIVATE_KEY
});


// API Calls

let sidekicks= [
  {'Id':'1010743'},
  {'Id':'1009297'},
  {'Id':'1009720'},
  {'Id':'1009211'}
  ]

console.log(sidekicks[0].Id);

console.log('before the api request');
app.get('/characters', function (request, response) {
  // Search for a character
  for(var i = 0 ; i < sidekicks.length ; i++){
  marvel.characters.find(sidekicks[i].Id).then(function(res) {
    console.log('Found character', res.data[0]);
    let results = res.data[0];
    console.log(results);
    sidekicks[i].name = "hello";
    side[i]['whatever'] = ="helo
                                        
                                               
    
    
    
    })
   
  .fail(console.error)
  .done();
  }
  response.send(results);
});




// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
