const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // when working with middleware must pass a next middleware
    // unless you are terminating the whole cycle by sending back the repsonse
    next();
};

// provide the middleware in the cente of route and callback
// logger is the middleware
app.get("/", logger, (req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.listen(5001, () => {
    console.log("listing to the port 5001");
});