import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {  Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({component:Component,...rest}) => {
 
 const {user,loading,isAuthenticated} = useSelector((state)=>state.load)
 const navigate = useNavigate();
 
    return (
        <Fragment>
        {loading === false && (
          <Route
            {...rest}
            render={(props) => {
              if (isAuthenticated === false) {
                return navigate('/login');
              }
  
            //   if (isAdmin === true && user.role !== "admin") {
            //     return <Redirect to="/login" />;
            //   }
  
              return <Component {...props} />;
            }}
          />
        )}
      </Fragment>
  )
}

export default ProtectedRoute