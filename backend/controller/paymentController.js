const  catchasyncerror= require("../middleware/catchasyncerror");

const stripe = require("stripe")(process.env.stripe_secret_key)

exports.processPayment = catchasyncerror(async(req,res,next)=>{
    const payment = await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:"inr",
        metadata:{
            company:"Ecommerce"
        },
        description: 'Software development services',
        shipping: {
            name: 'Jenny Rosen',
            address: {
              line1: '510 Townsend St',
              postal_code: '98140',
              city: 'San Francisco',
              state: 'CA',
              country: 'US',
            }}
 
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
        stripekey:process.env.stripe_key,
    })
})