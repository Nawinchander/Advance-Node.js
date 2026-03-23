const userService = require("./user.service");
const ApiResponse = require("../../utils/ApiResponse");

const register = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.json(new ApiResponse(201, user, "User Created"));
  } catch (err) {
    next(err);
  }
};

module.exports = { register };


