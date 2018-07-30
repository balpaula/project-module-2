var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('auth');
  //redirect to auth/login
});

router.post('/signup', function(req, res, next) {
  const { username, email, password } = req.body;
  if (!username || !password) {
    req.flash('alert', 'Missing username or password');
    res.redirect('/#signup');
    return;
  }
  User.findOne({ username })
    .then(user => {
      if(user) {
        req.flash('alert', 'Username not available');
        res.redirect('/#signup');
      }else{
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = new User ({ username, email, password: hashedPassword });
        return newUser.save()
        .then (user => {
          req.session.currentUser = user;
          res.redirect('/home');
        })
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/login', function(req, res, next) {
  res.send('login');
});

// router.post('/login', function(req, res, next) {
  
// });

// router.post('/logout', function(req, res, next) {
  
// });

module.exports = router;
