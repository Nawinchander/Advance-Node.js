const router = require("express").Router();
const { getAll, create } = require("./product.controller");
const auth = require("../../middleware/auth.middleware");

router.get("/", getAll);
router.post("/", auth, create);

module.exports = router;


