const express = require("express");
const router = express.Router();
const {
  register,
  auth,
  logout,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController.js");

router.post("/", register);
router.post("/auth", auth);
router.post("/logout", logout);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

module.exports = router;
