import { createReducer } from "@reduxjs/toolkit";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCTDETAILS_FAIL,
  ALL_PRODUCTDETAILS_REQUEST,
  ALL_PRODUCTDETAILS_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
} from "../action/productAction";

const initialValue = {
  products: [],
};

export const productreducer = createReducer(initialValue, (builder) => {
  builder.addCase(ALL_PRODUCT_REQUEST, (state, action) => {
    return {
      loading: true,
    };
  });
  builder.addCase(ALL_PRODUCT_SUCCESS, (state, action) => {
    return {
      loading: false,
      product: action.payload,
    };
  });

  builder.addCase(ALL_PRODUCT_FAIL, (state, action) => {
    return {
      loading: false,
      error: action.payload,
    };
  });
  builder.addCase(ADMIN_PRODUCT_REQUEST,(state,action)=>{
    return{
      loading:true,

    }
  });
  builder.addCase(ADMIN_PRODUCT_SUCCESS,(state,action)=>{
    return{
      loading:false,
      products:action.payload
    }
  });
  builder.addCase(ADMIN_PRODUCT_FAIL,(state,action)=>{
    return{
      loading:false,
      error:action.payload
    }
  })
});

//product details
const productInitial = {
  productDetails: [],
};
export const productDetailsreducer = createReducer(
  productInitial,
  (builder) => {
    builder.addCase(ALL_PRODUCTDETAILS_REQUEST, (state, action) => {
      return {
        loading: true,
      };
    });
    builder.addCase(ALL_PRODUCTDETAILS_SUCCESS, (state, action) => {
      return {
        loading: false,
        product: action.payload,
      };
    });

    builder.addCase(ALL_PRODUCTDETAILS_FAIL, (state, action) => {
      return {
        loading: false,
        error: action.payload,
      };
    });
  }
);

//product reducer

export const productsReducer = createReducer(initialValue,(builder)=>{
  builder.addCase(DELETE_PRODUCT_REQUEST,(state,action)=>{
    return{
      loading:true,
      ...state,
    }
  })
  builder.addCase(DELETE_PRODUCT_SUCCESS,(state,action)=>{
    return{
      loading:false,
      isDeleted:action.payload,
    }
  })

  builder.addCase(DELETE_PRODUCT_FAIL,(state,action)=>{
    return{
      loading:false,
      erorr:action.payload,
    }
  })
  builder.addCase(DELETE_PRODUCT_RESET,(state,action)=>{
    return {
      ...state,
      isDeleted: false,
    };
  })
})

//CREATE PRODUCT 

export const newProduct = createReducer(initialValue,(builder)=>{
  builder.addCase(NEW_PRODUCT_REQUEST,(state,action)=>{
    return{
      loading:true
    }
  })
  builder.addCase(NEW_PRODUCT_SUCCESS,(state,action)=>{
    return{
      loading:false,
      product:action.payload
    }
  })
  builder.addCase(NEW_PRODUCT_FAIL,(state,action)=>{
    return{
      loading:false,
      error:action.payload
    }
  })

})


