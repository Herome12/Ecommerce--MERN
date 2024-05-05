import {configureStore} from "@reduxjs/toolkit";
import {productreducer,productDetailsreducer, productsReducer, newProduct} from "./reducer/Reducer";

import { UserLogin, forgotReducer,userDetailsReducer, loadUser, profileReducer, registerUser,allUserReducer } from "./reducer/UserReducer";
import { addToCart } from "./reducer/cartReducer";
import { allOrdersReducer, myOrder,orderCreate, orderDetailsReducer ,orderReducer} from "./reducer/orderReducer";





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
        myorder:myOrder,
        createorder:orderCreate,
        orderDetails:orderDetailsReducer,
        allUsers:allUserReducer,
        allOrders:allOrdersReducer,
        product:productsReducer,
        newProduct:newProduct,
        order: orderReducer,
        userDetails: userDetailsReducer,
    }
},

)



export default store;