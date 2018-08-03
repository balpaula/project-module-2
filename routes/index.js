const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: req.flash('alert') });
});

router.post('/logout', function(req, res, next) {
  delete req.session.currentUser;
  res.redirect('/');
});

module.exports = router;
