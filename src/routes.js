const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Primeira rota
routes.get('/products', ProductController.index);

//exportando para utilizar dentro do server.js
module.exports = routes;