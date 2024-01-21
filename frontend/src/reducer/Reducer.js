import { createReducer } from "@reduxjs/toolkit";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCTDETAILS_FAIL,
  ALL_PRODUCTDETAILS_REQUEST,
  ALL_PRODUCTDETAILS_SUCCESS,
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
