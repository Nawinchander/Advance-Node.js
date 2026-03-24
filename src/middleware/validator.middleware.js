const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return next(new Error(error.message));
  next();
};


router.post("/register", validate(registerSchema), register);


