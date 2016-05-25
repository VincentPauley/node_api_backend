var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

Teams = require('./models/teams.js');

// connect to mongoose
mongoose.connect('mongodb://localhost/hockey');
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('please use api/hockey to access api');
});


app.get('/api/teams', function(req, res) {
  console.log('trace');
  Teams.getTeams(function(err, teams) {
    if(err) {
      throw err;
    }
    res.json(teams);
  });
});

app.listen(3000);
console.log('Server is live');
