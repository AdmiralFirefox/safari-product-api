const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const productsRoute = require("../route/products"); 

const app = express();

app.use(cors());

app.use("/products", productsRoute);

module.exports = app;
module.exports.handler = serverless(app);
