const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

const port = 4040;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
    console.log(`running on ${port}`)
});