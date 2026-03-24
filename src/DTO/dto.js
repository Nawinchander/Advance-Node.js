const userDTO = (user) => ({
  id: user._id,
  email: user.email,
});


res.json(new ApiResponse(200, userDTO(user)));


