const { application } = require("express");
const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require('./authorize');

// req => middleware => res

/// how to make a middleware available on all routes? by using app.use
app.use([logger, authorize]);
// & if for an api app.use
// app.use('/api', logger) - it will be applied for all the routes starting with api

// provide the middleware in the cente of route and callback
// logger is the middleware
app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/api/products", (req, res) => {
    res.send("Products");
});

app.get("/api/items", (req, res) => {
    res.send("Items");
});
app.listen(5001, () => {
    console.log("listing to the port 5001");
});