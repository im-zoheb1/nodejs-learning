const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

// with parameters
app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params
    const singleProduct = products.find(product => product.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }
    return res.json(singleProduct);
})

// can get complex
app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
    console.log(req.params);
    // { productId: 1, reviewId: 'abc' }
    res.json(req.params);
})

app.get('*', (req, res) => {
    res.send('<h1>So no page available</h1><a href="/">Go to home page</a>')
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});