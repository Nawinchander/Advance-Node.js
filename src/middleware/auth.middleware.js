const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");
const ApiError = require("../utils/ApiError");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new ApiError(401, "Unauthorized");

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    next(new ApiError(401, "Invalid Token"));
  }
};

module.exports = authMiddleware;


