#!/usr/bin/node

const express = require('express');
let cors = require('cors');
const morgan = require('morgan');
const path = require('path');
let createError = require('http-errors');
let favicon = require('serve-favicon');
const port = 9000 || process.env.PORT;

const routesProject = require('./routes/index');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))
app.use(express.static(path.join(__dirname, './public')));

app.use('/', routesProject);

const serverError = (req, res, next) => {
  let err = new Error('Not Found');
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error.html', { title: 'Error 404', message: 'Not Found' });

  next();
}

app.use(serverError);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on('SIGTERN', () => {
  app.close(() => {
    console.log('Process terminated')
  })
});
