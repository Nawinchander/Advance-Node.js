const products = [];

const getProducts = () => products;

const createProduct = (data) => {
  products.push(data);
  return data;
};

module.exports = { getProducts, createProduct };


