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

export const ADMIN_PRODUCT_REQUEST = createAction("ADMIN_PRODUCT_REQUEST")
export const ADMIN_PRODUCT_SUCCESS = createAction("ADMIN_PRODUCT_SUCCESS")
export const ADMIN_PRODUCT_FAIL = createAction("ADMIN_PRODUCT_FAIL")

export const  DELETE_PRODUCT_REQUEST = createAction(" DELETE_PRODUCT_REQUEST")
export const  DELETE_PRODUCT_SUCCESS = createAction(" DELETE_PRODUCT_SUCCESS")
export const DELETE_PRODUCT_FAIL = createAction("DELETE_PRODUCT_FAIL")
export const DELETE_PRODUCT_RESET = createAction("DELETE_PRODUCT_RESET")


export const NEW_PRODUCT_REQUEST = createAction("NEW_PRODUCT_REQUEST")
export const NEW_PRODUCT_SUCCESS = createAction("NEW_PRODUCT_SUCCESS")
export const NEW_PRODUCT_FAIL = createAction("NEW_PRODUCT_FAIL")
export const NEW_PRODUCT_RESET = createAction("NEW_PRODUCT_RESET")

export const UPDATE_PRODUCT_FAIL = createAction("UPDATE_PRODUCT_FAIL")
export const UPDATE_PRODUCT_SUCCESS = createAction("UPDATE_PRODUCT_SUCCESS")
export const UPDATE_PRODUCT_REQUEST = createAction("UPDATE_PRODUCT_REQUEST")
export const UPDATE_PRODUCT_RESET = createAction("UPDATE_PRODUCT_RESET")
 


// get product 


export const getProduct = ()=>async(dispatch)=>{
  try {
    dispatch({
      type:ALL_PRODUCT_REQUEST
    })

    const {data} = await axios.get("api/v1/getProduct");
    console.log(data)
    dispatch({
      type:ALL_PRODUCT_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:ALL_PRODUCT_FAIL,
    payload:error.message
    })
  }
}


//product details 

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

//get all products --admin

export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/products");

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//delete product --admin
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/product/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//creating new product -- admin 

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/product/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

//update product 
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};