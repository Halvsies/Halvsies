var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Listing = require('./models/Listing.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static("public"));

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  // Database configuration with mongoose
  mongoose.connect("mongodb://localhost/halvsies");
}

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

app.get('/', function(req, res) {
  res.sendFile('./public/index.html');
})

app.get('/api/mylist', function(req, res) {

  Listing.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
});

app.get('/api/unavailable', function(req, res) {

  Listing.find({"reserved": "true"}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
});

app.get('/api/available', function(req, res) {

  Listing.find({"reserved": "false"}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
});

app.post('/api/mylist', function(req, res) {
  console.log(req.body.item);
  var newListing = new Listing({item: req.body.item.item, bulk_qty: req.body.item.bulk_qty, split_qty: req.body.item.split_qty, buy_date: req.body.item.buy_date});

  newListing.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });

});

app.delete('/api/mylist/:id', function(req, res) {

  Listing.find({'_id': req.params.id}).remove().exec(function(err, doc) {
    res.send(doc);
  });

});

app.post("/reserve/:id", function(req, res) {

  Listing.update({
    "_id": req.params.id
  }, {

    $set: {
      "reserved": "true"
    }
  }, function(error, edited) {

    if (error) {

      res.send(error);
    } else {

      res.send(edited);
    }
  });

});

app.post("/unreserve/:id", function(req, res) {

  Listing.update({
    "_id": req.params.id
  }, {

    $set: {
      "reserved": "false"
    }
  }, function(error, edited) {

    if (error) {

      res.send(error);
    } else {

      res.send(edited);
    }
  });

});
