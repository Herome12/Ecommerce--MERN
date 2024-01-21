const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"please enter product name"]
    },
    description:{
        type:String,
        require:[true,"please describe your following product"]
    },
    prices:{
        type:Number,
        require:[true,"enter the price of product"],
        maxLength:[6,"the price should not exceed 6 figures"]
    },
    rating:{ 
        type:Number,
        default:0
    },
    Stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
      },
      Images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        }],
})


module.exports = mongoose.model("Product",ProductSchema)