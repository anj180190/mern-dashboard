const asyncHandler = require("express-async-handler");

/*
 * @API  POST /api/users
 * @desc This is a Registeration method
 * @Auth Public
 */

const register = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(200);
    throw new Error("Please add name");
  }
  res.status(200).json({ message: "This is a Registeration method" });
});

/*
 * @API  POST /api/users/auth
 * @desc This is a authetication method
 * @Auth Public
 */

const auth = asyncHandler(async (req, res) => {
  // console.log(req);
  res.status(200).json({ message: "This is a authetication method" });
});

/*
 * @API  get /api/users/profile
 * @desc This is a get user profile method
 * @Auth Public
 */

const getUserProfile = asyncHandler(async (req, res) => {
  // console.log(req);
  res.status(200).json({ message: "This is a get user profile method" });
});

/*
 * @API  POST /api/users/profile
 * @desc This is a profile updation method
 * @Auth Public
 */

const updateUserProfile = asyncHandler(async (req, res) => {
  // console.log(req);
  res.status(200).json({ message: "This is a profile updation method" });
});

/*
 * @API  POST /api/users/logout
 * @desc This is a logout method
 * @Auth Public
 */

const logout = asyncHandler(async (req, res) => {
  // console.log(req);
  res.status(200).json({ message: "This is a logout method" });
});

module.exports = {
  register,
  auth,
  logout,
  getUserProfile,
  updateUserProfile,
};
