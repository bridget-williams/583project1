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


app.get('/characters', function (request, response) {
  // Search for a character
  console.log("Searching...");
//   marvel.characters.find('1010743').then(function(res) {
//     console.log('Found', res.data[0].name);
//     let results = res.data[0];
    
//     response.send(results);
//     // return marvel.characters.comics(res.data[0].id);
//   }) 
//   .fail(console.error)
//   .done();
  
  //loop to get data on 2 characters
  sidekicks.forEach((s) => {
    marvel.characters.find(s.Id)
    .then(function(data){
        // Persist the data on this country object
        s.data = data.data;
    }, function(err) {
      console.error(err);
    });
  });
  
  // Check will see if we have .data on all the country objects
  // which indicates all requests have returned successfully.
  // If the lengths don't match then we call check again in 500ms
  let check = () => {
    if (sidekicks.filter(s => s.data !== undefined).length 
    !== sidekicks.length) {
      setTimeout(check, 500);
    } else {
      response.send(sidekicks);
    }
  }
  
  // Call check so we don't send a response until we have all the data back
  check();
  
  
  
  
});




// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
