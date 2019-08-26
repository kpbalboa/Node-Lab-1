const express = require('express');
const shoppingCartRoutes = express.Router();
const shoppingCart = require('./shoppingCart')
shoppingCartRoutes.get('/shoppingCart', (req, res) => {
    res.send(shoppingCart);
});
shoppingCartRoutes.post('/shoppingCart', (req, res) => {
    shoppingCart.push(req.body)
    res.send(shoppingCart)
});
shoppingCartRoutes.delete('/shoppingCart/:id', (req, res) => {
    const index =shoppingCart.findIndex((item)=> item.id === req.params.id);
    shoppingCart.splice(index,1)
    res.send(shoppingCart)
});
shoppingCartRoutes.put('/shoppingCart/:id', (req, res) => {
    const index =shoppingCart.findIndex((item)=> item.id === req.params.id);
    shoppingCart.splice(index,1, req.body)
    res.send(shoppingCart)
});

module.exports=shoppingCartRoutes