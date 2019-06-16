var express = require('express');
var router = express.Router();

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

module.exports = router;
