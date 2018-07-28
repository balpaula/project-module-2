var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('recipes');
});

router.get('/suggestions', function(req, res, next) {
  res.send('suggestions');
});

router.get('/all', function(req, res, next) {
  res.send('all');
});

router.get('/:id', function(req, res, next) {
  res.send('detail');
});

module.exports = router;
