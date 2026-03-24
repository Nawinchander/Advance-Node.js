const logger = require("../utils/logger");

const logMiddleware = (req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    time: new Date(),
  });
  next();
};

