const express = require("express");
const { creatProduct, getAllProduct, getProductbyid, updateProduct, deleteProduct } = require("../controller/productcontroller");
const { isAuthenticatedUser, isRoleAuthentication } = require("../middleware/auth");

 
const router = express.Router();

router.post("/products",isAuthenticatedUser,creatProduct)
//get all products
router.get("/getProducts",getAllProduct)

router.get("/product/:id",getProductbyid)

router.put("/updateProduct/:id",updateProduct)

router.delete("/deleteProduct/:id",deleteProduct)
 
module.exports = router;  