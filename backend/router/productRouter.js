const express = require("express");
const { creatProduct, getAllProduct, getProductbyid, updateProduct, deleteProduct,getAdminProducts } = require("../controller/productcontroller");
const { isAuthenticatedUser, isRoleAuthentication } = require("../middleware/auth");

 
const router = express.Router();

router.post("/products",isAuthenticatedUser,creatProduct)
//get all products
router.get("/getProduct",getAllProduct)

router.get("/product/:id",getProductbyid)

router.put("/updateProduct/:id",updateProduct)

router.delete("/deleteProduct/:id",deleteProduct)

router
  .get("/admin/products",isAuthenticatedUser, isRoleAuthentication("admin"), getAdminProducts)



router.delete("/admin/product/:id",isAuthenticatedUser,isRoleAuthentication("admin"),deleteProduct);
router.put("/admin/product/:id",isAuthenticatedUser,isRoleAuthentication("admin"),updateProduct)
router.post("/admin/product/new",isAuthenticatedUser, isRoleAuthentication("admin"), creatProduct)

 
 
module.exports = router;    