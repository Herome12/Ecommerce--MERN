import {configureStore} from "@reduxjs/toolkit";
import {productreducer,productDetailsreducer} from "./reducer/Reducer";

import { UserLogin, forgotReducer, loadUser, profileReducer, registerUser,allUserReducer } from "./reducer/UserReducer";
import { addToCart } from "./reducer/cartReducer";
import { allOrdersReducer, myOrder,orderCreate, orderDetailsReducer } from "./reducer/orderReducer";





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
        allOrders:allOrdersReducer
    }
},

)



export default store;