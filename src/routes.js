const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Primeira rota
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

//exportando para utilizar dentro do server.js
module.exports = routes;