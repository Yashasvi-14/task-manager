
const { validationResult } =
require("express-validator");
console.log("VALIDATION FILE EXECUTED");
const validate = (req, res, next) => {
  const errors =
    validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};

module.exports = validate;