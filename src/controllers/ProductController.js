const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        /* 
            o uso do 'await' garante que a próxima 
            linha seja executada somente após recuperar 
            todos os registros do banco de dados.
        */
        const products = await Product.find();
        return res.json(products);
    },
};