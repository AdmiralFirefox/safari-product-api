const express = require("express");
const app = express();
const productsRoute = require("./route/products");

const PORT = 8080;

app.use("/products", productsRoute);

app.listen(PORT);
