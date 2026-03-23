const express = require("express");
const logger = require("./middleware/logger.middleware");
const errorHandler = require("./middleware/error.middleware");

const userRoutes = require("./modules/user/user.routes");
const productRoutes = require("./modules/product/product.routes");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

app.use(errorHandler);

module.exports = app;



