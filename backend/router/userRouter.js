const express = require("express");
const { loginUser,getSingleUser,updateUserRole,deleteUser,logoutUser, findAllUser, forgotPassword, updatePassword, registerUser, getUserDetails, updateUserProfile, resetPassword, getAllUser } = require("../controller/userController");
const { isAuthenticatedUser,isRoleAuthentication } = require("../middleware/auth");

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

router.get("/admin/users",getAllUser)
router
  
  .get("/admin/user/:id",isAuthenticatedUser, isRoleAuthentication("admin"), getSingleUser)
  .put("/admin/user/:id",isAuthenticatedUser, isRoleAuthentication("admin"), updateUserRole)
  .delete("/admin/user/:id",isAuthenticatedUser, isRoleAuthentication("admin"), deleteUser);

module.exports = router;