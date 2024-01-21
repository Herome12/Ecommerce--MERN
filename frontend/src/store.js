import {configureStore} from "@reduxjs/toolkit";
import {productreducer,productDetailsreducer} from "./reducer/Reducer";

import { UserLogin, forgotReducer, loadUser, profileReducer, registerUser } from "./reducer/UserReducer";
import { addToCart } from "./reducer/cartReducer";




const store = configureStore({
    reducer:{
        products:productreducer,
        productDetails:productDetailsreducer,
        user:UserLogin,
        register:registerUser,
        load:loadUser,
        profile:profileReducer,
        forgot:forgotReducer,
        cart:addToCart,
    }
},

)



export default store;