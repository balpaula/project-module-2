const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const authMiddleWare = require('./middlewares/auth');
const hbs = require('hbs');
const flash = require('connect-flash');
require('dotenv').config();

// mongoose.connect('mongodb://localhost/fridgeat');
mongoose.connect(process.env.MONGODB_URI);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const fridgeRouter = require('./routes/fridge');
const homeRouter = require('./routes/home');
const recipesRouter = require('./routes/recipes');

const app = express();

// view engine setup

hbs.registerPartials(__dirname + '/views/partials');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'ironhack',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use((req, res, next) => {
  app.locals.currentUser = req.session.currentUser;
  next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use('/', indexRouter);
app.use('/auth', authMiddleWare.requireAnom, authRouter);
app.use('/users', authMiddleWare.requireUser, usersRouter);
app.use('/fridge', authMiddleWare.requireUser, fridgeRouter);
app.use('/home', authMiddleWare.requireUser, homeRouter);
app.use('/recipes', authMiddleWare.requireUser, recipesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.status === 404 ? 'Sorry, page not found' : 'Internal server error';
  res.locals.error = req.app.get('env') === 'development' ? err : err.status;

  // render the error page

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
