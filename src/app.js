const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Carrega as Rotas
const index = require('./routes/index')
const products = require('./routes/product')


app.use('/',index);
app.use('/produtos',products);

module.exports = app;