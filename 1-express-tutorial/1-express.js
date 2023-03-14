const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
// - will take care of all the images and styles, js files automatically
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
    console.log("server listinning is on port 5000...");
});

// app.get("/", (req, res) => {
//     res.status(200).send("Home page");
// });
// app.get("/about", (req, res) => {
//     res.status(200).send("About page");
// });

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen