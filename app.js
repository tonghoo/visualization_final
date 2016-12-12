var express = require('express');
var app = express();
var assert = require('assert');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test'
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/*app.use(express.static('public'));*/

app.set('views', __dirname + '/public');

// here you set that you're using `ejs` template engine, and the
// default extension is `ejs`
app.set('view engine', 'ejs');

app.get('/',function (req, res) {
	res.sendFile( __dirname + "/" + "index.html" )

      });
app.get('/a.html', function (req, res) {
 MongoClient.connect(url, function(err, db) {
  var data=db.collection('mydata').find().toArray(function(error, documents) {
    if (err) throw error;

    res.render('fianl-barchart',{data:(documents)})
	
});;
 })  
  })
 
app.get('/b.html', function (req, res) {
 MongoClient.connect(url, function(err, db) {
  var data=db.collection('salebystylenew').find().toArray(function(error, documents) {
    if (err) throw error;

    res.render('final-linechart',{data:(documents)})
	
});
});

  
})
app.get('/c.html', function (req, res) {
 MongoClient.connect(url, function(err, db) {
  var data=db.collection('scatterplot').find().toArray(function(error, documents) {
    if (err) throw error;

    res.render('final-scatterplot',{data:(documents)})
	
});
});

  
})
// Retrieve


// Connect to the db

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})