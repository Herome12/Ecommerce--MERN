import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const CREATE_ORDER_REQUEST = createAction("CREATE_ORDER_REQUEST")
export const CREATE_ORDER_FAIL = createAction("CREATE_ORDER_FAIL")
export const CREATE_ORDER_SUCCESS = createAction("CREATE_ORDER_SUCCESS")

export const MY_ORDER_REQUEST = createAction("MY_ORDER_REQUEST")
export const MY_ORDER_FAIL = createAction("MY_ORDER_FAIL")
export const MY_ORDER_SUCCESS = createAction("MY_ORDER_SUCCESS")

export const orderStatus = (order)=>async (dispatch)=>{

    try {
        dispatch({
            type:CREATE_ORDER_REQUEST,
        })

        const config = {
            headers: {
              "Content-Type": "application/json",
            },
        }
        const {data} = await axios.post("api/v1/order/new",order,config)   

        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data.order
        })
    } catch (error) {

        dispatch({
            type:CREATE_ORDER_FAIL,
            payload:error.message,

        })
        
    }
}


export const myOrder = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:MY_ORDER_REQUEST
        })

        const {data}  = await axios.get("/api/v1/orders/me")

       dispatch({
        type:MY_ORDER_SUCCESS,
        payload:data.orders
       })
    } catch (error) {

        dispatch({
            type:MY_ORDER_FAIL,
            payload:error.message,
        })
        
    }
}