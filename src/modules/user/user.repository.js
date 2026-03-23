const User = require("./user.model");

const createUser = (data) => User.create(data);

const getUserByEmail = (email) => {
  return User.findOne({ email });
};

module.exports = { createUser, getUserByEmail };


