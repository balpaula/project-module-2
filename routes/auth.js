const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/user');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('auth');
  //redirect to auth/login
});

router.post('/signup', (req, res, next) => {
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

router.get('/login', (req, res, next) => {
  res.render('login', { message: req.flash('alert') });
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
      req.flash('alert', 'Missing username or password');
      res.redirect('/auth/login');
      return;
  }
  User.findOne({ username })
    .then(user => {
      if (!user) {
        req.flash('alert', 'Incorrect username or password');
        return res.redirect('/auth/login');
      } 
      if (bcrypt.compareSync(password /* provided paswword */, user.password/* hashed password */)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect('/home');
      } else {
        req.flash('alert', 'Incorrect username or password');
        res.redirect('/auth/login');
      }
    })
    .catch(next);
});

module.exports = router;
