import { createReducer } from "@reduxjs/toolkit";

import { ALL_ORDERS_FAIL,   DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,ALL_ORDERS_REQUEST,UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL, ALL_ORDERS_SUCCESS, CREATE_ORDER_FAIL,CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS, MY_ORDER_FAIL, MY_ORDER_REQUEST, MY_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../action/orderAction";


const initialState ={
    order:[]
}
export const orderCreate = createReducer(initialState,(builder)=>{
    builder.addCase(CREATE_ORDER_REQUEST,(state,action)=>{
        return{
            loading:true,

        }
    })
    builder.addCase(CREATE_ORDER_SUCCESS,(state,action)=>{
        return{
            loading:false,
            order:action.payload
        }
    })

    builder.addCase(CREATE_ORDER_FAIL,(state,action)=>{
        return{
            loading:false,
            error:action.payload
        }
    })
})



export const myOrder = createReducer(initialState,(builder)=>{
    builder.addCase(MY_ORDER_REQUEST,(state,action)=>{
        return{
            loading:true,

        }
    })

    builder.addCase(MY_ORDER_SUCCESS,(state,action)=>{
        return{
            loading:false,
            Order:action.payload,

        }
    })

    builder.addCase(MY_ORDER_FAIL,(state,action)=>{
        return{
            loading:false,
            error:action.payload
        }
    })
})


export const orderDetailsReducer = createReducer(initialState,(builder)=>{
    builder.addCase(ORDER_DETAILS_REQUEST,(state,action)=>{
        return{
            loading:true,
        }
    })

    builder.addCase(ORDER_DETAILS_SUCCESS,(state,action)=>{
        return{
            loading:false,
            order:action.payload,
        }
    })
    builder.addCase(ORDER_DETAILS_FAIL,(state,action)=>{
        return{
            loading:false,
            error:action.payload
        }
    })
})

//GET ALL ORDERS

export const allOrdersReducer = createReducer(initialState,(builder)=>{
    builder.addCase(ALL_ORDERS_REQUEST,(state,action)=>{
        return{
            loading:true,
        }
    })

    builder.addCase(ALL_ORDERS_SUCCESS,(state,action)=>{
        return{
            loading:false,
            orders:action.payload,

        }

    })
    builder.addCase(ALL_ORDERS_FAIL,(state,action)=>{
        return{
            loading:false,
            error:action.payload
        }
    })
})


export const orderReducer = createReducer(initialState,(builder)=>{
    builder.addCase(DELETE_ORDER_FAIL,(state,action)=>{
        return{
            loading:false,
            error:action.payload
        }
    })
    builder.addCase(DELETE_ORDER_REQUEST,(state,action)=>{
        return{
            ...state,
            loading: true,
        }
    })
    builder.addCase(DELETE_ORDER_SUCCESS,(state,action)=>{
        return{
            ...state,
            loading: false,
            isDeleted: action.payload,   
        }
    })
    builder.addCase(UPDATE_ORDER_FAIL,(state,action)=>{
        return{
            loading:false,
            error:action.payload
        }
    })
    builder.addCase(UPDATE_ORDER_REQUEST,(state,action)=>{
        return{
            ...state,
        loading: true,
        }
    })
    builder.addCase(UPDATE_ORDER_SUCCESS,(state,action)=>{
        return{
            ...state,
            loading: false,
            isUpdated: action.payload,
          
        }
    })
})