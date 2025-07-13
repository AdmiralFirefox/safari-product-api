const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

// /products - return all products
router.get("/", (_req, res) => {
  res.json(products);
});

// /products/categories - return list of unique categories
router.get("/categories", (_req, res) => {
  const categories = [...new Set(products.map((p) => p.category))];
  res.json(categories);
});

// /products/category/:category - return products in a specific category
router.get("/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const filtered = products.filter(
    (p) => p.category.toLowerCase() === category
  );

  if (filtered.length === 0) {
    return res
      .status(404)
      .json({ message: "No products found in this category" });
  }

  res.json(filtered);
});

// /products/:id - return a specific product by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

module.exports = router;
