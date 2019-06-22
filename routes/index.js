var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/submitrequest');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    

});


var SCContact = mongoose.Schema({
      fullName     :    String,
      email        :    String,
      tel          :    String,
      website      :    String,
      msg          :    String
    
    });

var Contact = mongoose.model('Contact', SCContact, 'submitrequest');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//added route to about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
//added route to services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

//added route to contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
//added route to projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.post('/submitrequest', function (req, res) {

    console.log("");
    //res.send(req.body);
res.send("Contact Request Submitted")

    
//var newcontact = new data(req.body);
var contact1 = new Contact(req.body);

contact1.save(function (err, contact) {
      if (err) return console.error(err);
    
    console.log("Data Saved Successfully");

});

});
module.exports = router;
