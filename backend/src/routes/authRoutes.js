const express = require("express");

const { registerUser, loginUser} = require("../controllers/authController");

const {
  registerValidation,
} = require("../validators/authValidator");

const validate = require(
  "../middleware/validationMiddleware"
);
console.log("TYPE OF VALIDATE:", typeof validate);
console.log(validate);
const router = express.Router();



router.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);
router.post("/login", loginUser);



module.exports = router;