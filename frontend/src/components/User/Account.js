import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/loading/loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
 
 const navigate = useNavigate();

 const{user,loading,isAuthenticated} = useSelector((state)=>state.load)

 console.log(user)

useEffect(() => {
  if(isAuthenticated === false){
    navigate('/login')
  }
}, [isAuthenticated])
 
return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={user &&`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user&&user.avatar.url} alt={user&&user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user&&user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user&&user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user&&user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Account