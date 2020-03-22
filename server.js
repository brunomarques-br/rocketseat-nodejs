const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');

// Iniciando o App
const app = express();

// Informando minha aplicação a liberação de entradas 'post' de dados em JSON
app.use(express.json());
// Dentro do 'cors()' tem configuraçoes de: quais domínios poderão acessar, questões de segurança.. entre outras configurações.
// A utilização do cors, faz com que a API seja acessada publicamente.
app.use(cors());

// Iniciando a conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);