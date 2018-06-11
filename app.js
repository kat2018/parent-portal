const createError = require('http-errors');
const compression = require("compression");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hbs = require("hbs");


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
require("dotenv").config();

const mongoose = require("mongoose");

// compress all responses
app.use(compression())

// server-sent event stream (Code Sourced from https://www.npmjs.com/package/compression)
app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')

  // send a ping approx every 2 seconds
  var timer = setInterval(function () {
    res.write('data: ping\n\n')

    res.flush()
  }, 2000)

  res.on('close', function () {
    clearInterval(timer)
  })
})


app.get('/', function (req, res) {
  res.render('Homepage');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//controllers
const parents_controllers = require("./routes/parents/parents_controllers.js");




//connect to database
if (process.env.MONGODB_URI || 3000) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/parent-portal");
}
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});
mongoose.connection.once("open", function() {
  console.log("Mongoose has connected to MongoDB!");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
