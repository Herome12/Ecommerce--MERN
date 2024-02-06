import React,{useEffect, useState} from 'react'
import './App.css';
import Header from './components/layout/Header/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Webfont from "webfontloader"
import Footer from './components/layout/footer/Footer';
import Home from './components/Home/Home';

import ProductDetails from './components/product/ProductDetails';
import Products from './components/product/Products';
import LoginUser from './components/User/LoginUser';
import { useDispatch, useSelector } from 'react-redux';
import { load, logoutUser } from './action/UserAction';
import UserOptions from './components/layout/Header/UserOptions';
import Account from './components/User/Account';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import axios from 'axios';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from './components/Cart/Payment';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrders from './components/order/MyOrders';
import OrderDetails from './components/layout/loading/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';




function App() {

  const dispatch = useDispatch();
  const {isAuthenticated, user} = useSelector((state)=>state.load)

  const [stripeapikey, setstripeapikey] = useState("")

  async function getStripeApiKey(){
    
 
    const {data} = await axios.get(`/api/v1/stripeapikey`)
    
   
    setstripeapikey(data.stripekey)


  }

  

  useEffect(() => {
  Webfont.load({
    google:{
      families:["Roboto","Chilanka","Droid Sans"]
    }
  })

    dispatch(load())
    getStripeApiKey();
 
 }, [dispatch])
 
 
  return (
    <>
    <Router>
      <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      {stripeapikey && (
        <Elements stripe={loadStripe(stripeapikey)}>
         <Routes>
         <Route exact path='/process/payment' Component={Payment} />
         </Routes>
         
        </Elements>
      )}
      <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/product/:id' Component={ProductDetails}></Route>
      <Route exact path='products' Component={Products}/>
      <Route exact path='products/:keyword' Component={Products}/>
      
      

      <Route exact path='/login' Component={LoginUser}/>
      <Route exact path='/account' Component={Account}/>
      <Route exact path='/me/update'Component={UpdateProfile}/>
      <Route exact path='/password/update' Component={UpdatePassword}/>
      <Route exact path='/password/forgot' Component={ForgotPassword}/>
      <Route exact path='/cart' Component={Cart}/>
      <Route exact path='/shipping' Component={Shipping}/>  
      <Route exact path='/order/confirm' Component={ConfirmOrder}/>
      <Route exact path='/success' Component={OrderSuccess}/>
      <Route exact path = '/orders' Component={MyOrders}/>
      <Route exact path='/order/:id' Component={OrderDetails}/>
      <Route  exact path='/admin/dashboard' Component={Dashboard}/>
      <Route
          exact
          path='/admin/products'
          
          Component={ProductList}
        />
      <Route
          exact
          path="/admin/product"
          isAdmin={true}
          Component={NewProduct}
        />
      </Routes>
      
      <Footer/>
    </Router>

   
    </>
  );
}

export default App;
