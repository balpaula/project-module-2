var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('fridge');
});

router.get('/ingredients', function(req, res, next) {
  res.send('ingredients');
  //redirect to ingredients/add
});

router.get('/ingredients/add', function(req, res, next) {
  res.send('add');
});

// router.post('/ingredients/add', function(req, res, next) {
  
// });

// router.post('/ingredients/:id/delete', function(req, res, next) {
  
// });

module.exports = router;
