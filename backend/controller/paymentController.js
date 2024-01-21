const  catchasyncerror= require("../middleware/catchasyncerror");

const stripe = require("stripe")(process.env.stripe_secret_key)

exports.processPayment = catchasyncerror(async(req,res,next)=>{
    const payment = await stripe.paymentIntents.create({
        ammount:req.body.ammount,
        currency:"inr",
        metadata:{
            company:"Ecommerce"
        }

    })
    res.status(200).json({
        success:true,
        message:"going well",
        client_secret : payment.client_secret, 
    })
})


//sending api key 


exports.sendSecretKey = catchasyncerror(async(req,res,next)=>{
    res.status(200).json({
        stripe_secret_key:process.env.stripe_secret_key,
    })
})