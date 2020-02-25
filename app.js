const express = require('express');
const app = express();

const mongoose = require('mongoose');

const path = require('path');
const bodyParser = require('body-parser');

const mainRouter = require('./routes/main');
const adminRouter = require('./routes/admin');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/', mainRouter);

mongoose.connect('mongodb://localhost:27017/test1').then(result => {
  app.listen(3000);
});
