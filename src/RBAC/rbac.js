const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new Error("Forbidden"));
    }
    next();
  };
};


router.post("/", auth, authorize(["admin"]), create);


