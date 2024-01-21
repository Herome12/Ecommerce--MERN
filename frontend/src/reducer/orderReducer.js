import { createReducer } from "@reduxjs/toolkit";

import { CREATE_ORDER_FAIL,CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS } from "../action/orderAction";


const orderCreate = createReducer(initialState=[],(builder)=>{
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