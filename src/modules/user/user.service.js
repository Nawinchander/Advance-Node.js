const userRepo = require("./user.repository");
const ApiError = require("../../utils/ApiError");

const registerUser = async (data) => {
  const existing = await userRepo.getUserByEmail(data.email);
  if (existing) throw new ApiError(400, "User already exists");

  return userRepo.createUser(data);
};

module.exports = { registerUser };


