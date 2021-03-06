const express = require('express');

const bodyParser = require('body-parser');

const index = require('./routes/index');
const beers = require('./routes/beers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/beers', beers);

app.listen(8000);
