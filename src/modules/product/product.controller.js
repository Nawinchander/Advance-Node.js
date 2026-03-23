const productService = require("./product.service");

const getAll = (req, res) => {
  res.json(productService.getProducts());
};

const create = (req, res) => {
  res.json(productService.createProduct(req.body));
};

module.exports = { getAll, create };


