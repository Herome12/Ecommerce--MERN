import {createAction} from "@reduxjs/toolkit"
import axios from "axios"

export const ADD_TO_CART = createAction("ADD_TO_CART")
export const REMOVE_CART_SUCCESS = createAction("REMOVE_CART_SUCCESS")
export const SHIPPING_INFO_SUCCESS = createAction("SHIPPING_INFO_SUCCESS")

export const addItemCart = (id,quantity)=> async(dispatch,getState)=>{

    const {data} = await axios.get(`/api/v1/product/${id}`)

    dispatch({
        type:ADD_TO_CART, 
        payload:{
            product:data.product._id,
            name:data.product.name,
            price:data.product.prices,
            image:data.product.Images[0].url,
            stock:data.product.Stock,
            rating:data.product.rating,
            quantity
        }
    })
    
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItem))
}

//REMOVE CART 

export const removeCart = (id)=>async(dispatch,getState)=>{
     
    dispatch({
        type:REMOVE_CART_SUCCESS,
        payload:id,
    })


   
 localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

    
}

//save shipping info

export const shippingInfo = (data) =>async(dispatch,getState)=>{

    dispatch({
        type:SHIPPING_INFO_SUCCESS,
        payload:data,
    })


   localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems)) 
}