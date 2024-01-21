import { ADD_TO_CART, REMOVE_CART_SUCCESS, SHIPPING_INFO_SUCCESS } from "../action/cartAction";
import {createReducer  } from "@reduxjs/toolkit";

const initialstate={
    cartItems:[]

}

export const addToCart = createReducer(initialstate,(builder)=>{
    builder.addCase(ADD_TO_CART,(state,action)=>{
        const item = action.payload

        const isItemExist = state.cartItems.find((i)=>i.product ===item.product)

        if(isItemExist){
            return{
                ...state,
                cartItems:state.cartItems.map((i)=>i.product===isItemExist.product?item:i)
            }

        }
        else{
            return{
                ...state,
                cartItems:[...state.cartItems,item]
            }
        }
    })

    builder.addCase(REMOVE_CART_SUCCESS,(state,action)=>{
       
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload),
              };
        
    })

    builder.addCase(SHIPPING_INFO_SUCCESS,(state,action)=>{
        return {
            ...state,
            shippingInfo: action.payload,
          };
    })
})

