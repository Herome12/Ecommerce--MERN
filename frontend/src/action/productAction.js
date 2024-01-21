import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

//constants
export const ALL_PRODUCT_FAIL = createAction("ALL_PRODUCT_FAIL");
export const ALL_PRODUCT_REQUEST = createAction("ALL_PRODUCT_REQUEST");
export const ALL_PRODUCT_SUCCESS = createAction("ALL_PRODUCT_SUCCESS");
export const ALL_PRODUCTDETAILS_FAIL = createAction("ALL_PRODUCTDETAILS_FAIL");
export const ALL_PRODUCTDETAILS_SUCCESS = createAction(
  "ALL_PRODUCTDETAILS_SUCCESS"
);
export const ALL_PRODUCTDETAILS_REQUEST = createAction(
  "ALL_PRODUCTDETAILS_REQUEST"
);

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
    const { data } = await axios.get("/api/v1/getProducts");

    const { product } = await data;

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const productDetails = (id) => async (dispatch) => {
  
  
  
  try {
    dispatch({
      type: ALL_PRODUCTDETAILS_REQUEST,
    });
    let url = `/api/v1/product/${id}`;

    const { data } = await axios.get(url);
    // const {product} = await data

    dispatch({
      type: ALL_PRODUCTDETAILS_SUCCESS,
      payload:data.product,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTDETAILS_FAIL,
      payload: error.message,
    });
  }
};
