const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Primeira rota
routes.get("/products", ProductController.index); //Lista todos produtos
routes.get("/products/:id", ProductController.show); //Busca por id
routes.post("/products", ProductController.store); //Cria produto
routes.put("/products/:id", ProductController.update); //Atualiza produto
routes.delete("/products/:id", ProductController.destroy); //Atualiza produto


//     Product.create({
//         title: 'React Native',
//         description: 'Build native app blabla',
//         url: 'http://github.com/facebook/react-native',
//  });

module.exports = routes;