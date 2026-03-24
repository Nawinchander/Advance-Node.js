const redis = require("redis");
const client = redis.createClient();

const cacheMiddleware = async (req, res, next) => {
  const key = req.originalUrl;

  const cached = await client.get(key);
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    client.setEx(key, 60, JSON.stringify(body)); // cache 60 sec
    res.sendResponse(body);
  };

  next();
};

module.exports = cacheMiddleware;


router.get("/", cacheMiddleware, getAll);


