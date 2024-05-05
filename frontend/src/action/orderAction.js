import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const CREATE_ORDER_REQUEST = createAction("CREATE_ORDER_REQUEST")
export const CREATE_ORDER_FAIL = createAction("CREATE_ORDER_FAIL")
export const CREATE_ORDER_SUCCESS = createAction("CREATE_ORDER_SUCCESS")

export const MY_ORDER_REQUEST = createAction("MY_ORDER_REQUEST")
export const MY_ORDER_FAIL = createAction("MY_ORDER_FAIL")
export const MY_ORDER_SUCCESS = createAction("MY_ORDER_SUCCESS")

export const ORDER_DETAILS_REQUEST = createAction("ORDER_DETAILS_REQUEST")
export const ORDER_DETAILS_SUCCESS = createAction("ORDER_DETAILS_SUCCESS")
export const ORDER_DETAILS_FAIL = createAction("ORDER_DETAILS_FAIL")


//get all orders
export const ALL_ORDERS_REQUEST = createAction("ALL_ORDERS_REQUEST")
export const ALL_ORDERS_SUCCESS = createAction("ALL_ORDERS_SUCCESS")
export const ALL_ORDERS_FAIL = createAction("ALL_ORDERS_FAIL");


export const DELETE_ORDER_REQUEST = createAction("DELETE_ORDER_REQUEST,")
export const DELETE_ORDER_SUCCESS = createAction("DELETE_ORDER_SUCCESS")
export const DELETE_ORDER_FAIL = createAction("DELETE_ORDER_REQUEST_FAIL");

export const UPDATE_ORDER_REQUEST = createAction("UPDATE_ORDER_REQUEST,")
export const UPDATE_ORDER_SUCCESS = createAction("UPDATE_ORDER_SUCCESS")
export const UPDATE_ORDER_FAIL = createAction("UPDATE_ORDER_FAIL");


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
        const {data} = await axios.post("/api/v1/order/new",order,config)   

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

export const getOrderDetails = (id) =>async(dispatch)=>{
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });
    
        const { data } = await axios.get(`/api/v1/order/${id}`);
    
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
      } catch (error) {
        dispatch({
          type: ORDER_DETAILS_FAIL,
          payload: error.message,
        });
      }
}


export const getAllOrders = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_ORDERS_REQUEST });
  
      const { data } = await axios.get("/api/v1/admin/orders");
  
      dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
      dispatch({
        type: ALL_ORDERS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  export const deleteOrder = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_ORDER_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/admin/order/${id}`);
  
      dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };  
  

  //update order
  export const updateOrder = (id, order) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/v1/admin/order/${id}`,
        order,
        config
      );
  
      dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };