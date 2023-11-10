const express = require("express");
const productsRoutes = require("../routes/Products.routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(productsRoutes);

app.set("port", process.env.PORT || port);

module.exports = app;
