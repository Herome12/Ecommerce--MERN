const Product = require("../models/product");
const ApiFeature = require("../utils/apiFeatures");
const catchasyncerror = require("../middleware/catchasyncerror");
const ErrorHandler = require("../utils/errorHandler");

//create a product 

exports.creatProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(200).json({
        success:true,
        product,
        message:"product created"
    })

}

//get all products   

exports.getAllProduct = catchasyncerror( async(req,res,next)=>{
    const resultPerPage = 8
    // const apiFeature = new ApiFeature(Product.find(),req.query).search().filter()
    const product = await Product.find();
    res.status(200).json({
        
        product
    })
})

//get product by id

exports.getProductbyid = catchasyncerror(async(req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
       return next(new ErrorHandler("product not found",404))
    }
   //if product found
   res.status(200).json({
    success:true,
    product  
   }) 
})

//get product --adming
exports.getAdminProducts = catchasyncerror(async (req, res, next) => {
    const products = await Product.find();
  
    res.status(200).json({
      success: true,
      products,
    });
  });

//update product 

exports.updateProduct = catchasyncerror(async(req,res,next)=>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body);
    if(!product){
        res.status(500).json({
            success:false,
            message:"product couldn't be found in database"
        })
    }
    //if product found

    res.status(200).json({
        success:true,
        product
    })
})

//delete products 

exports.deleteProduct = catchasyncerror( async(req,res,next)=>{
    let product  = await Product.findByIdAndDelete(req.params.id);
    if(!product){
        res.status(500).json({
            success:false,
            message:"coundn't found the product"
        })
    }
    res.status(200).json({
        success:true,
        product,
        message:"successfully deleted"
    })
})