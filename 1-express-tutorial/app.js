// query string params
const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/v1/query', (req, res) => {
    // e.g passed /query?name=john&id=4
    console.log(req.query)
        // output => {name: 'john', id: 4}
})

app.get("*", (req, res) => {
    res.send('<h1>So no page available</h1><a href="/">Go to home page</a>');
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});