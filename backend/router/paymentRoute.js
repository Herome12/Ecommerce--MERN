const express  = require("express")
const router = express.Router()
const {processPayment,sendSecretKey} =require("../controller/paymentController")
const  { isAuthenticatedUser } = require("../middleware/auth")
//route 

router.post("/payment",isAuthenticatedUser,processPayment)

router.get("/stripeapikey",isAuthenticatedUser,sendSecretKey)




module.exports = router