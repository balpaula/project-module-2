var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('auth');
  //redirect to auth/login
});

router.post('/signup', function(req, res, next) {
  
});

router.get('/login', function(req, res, next) {
  res.send('login');
});

router.post('/login', function(req, res, next) {
  
});

router.post('/logout', function(req, res, next) {
  
});

module.exports = router;
