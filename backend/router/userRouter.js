const express = require("express");
const { loginUser, logoutUser, findAllUser, forgotPassword, updatePassword, registerUser, getUserDetails, updateUserProfile, resetPassword } = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();
//register user

router.post("/createUser",registerUser)

//login user 

router.post("/loginUser",loginUser)

//logout user

router.get("/logout",logoutUser)

//get all user 

router.get("/findone",findAllUser);

//getuseDetails

router.get("/me",isAuthenticatedUser,getUserDetails)

//forgot password reset token

router.post("/forgotPassword",forgotPassword);

//update password 

router.put("/updatePassword",isAuthenticatedUser,updatePassword);

//update profile

router.put("/update/me",isAuthenticatedUser,updateUserProfile)
//reset password
router.put("/password/reset/:token",resetPassword)


module.exports = router;