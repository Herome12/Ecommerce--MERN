import React ,{useEffect} from 'react'
// import {CgMouse} from "react-icon/all"
import "./Home.css"
import Product from "./Product.js"
import MetaData from "../layout/MetaData.js"
import { getProduct } from '../../action/productAction.js'
import LoginIcon from '@mui/icons-material/Login';
import {useDispatch,useSelector} from "react-redux"
import Loader from '../layout/loading/loader.js'



const Home = () => {

    const dispatch = useDispatch();
    const {loading,product} = useSelector((state)=> state.products)
    
    useEffect(() => {
        dispatch(getProduct())
        
      
    }, [dispatch])
    

    
  return (
    <>
    {loading ? (<Loader/>):(  <>
    <MetaData title = 'Home page'></MetaData>
    
    <div className="banner">
    <div className="login">
       <a href="/login">   <LoginIcon/></a>
    </div>
       <p>
           Welcome to Ecommerce
       </p>
       <h1>FIND AMAZING PRODUCTS BELOW</h1>

       <a href="#container">
           <button>
               Scroll

           </button>
       </a>

       <h2 className="homeHeading">
           Featured Product
       </h2>
       
      
       <div className="container" id='container'>
        
          
          {product && product.map((product)=>(<Product product = {product}/>
          ))}
           
           
       </div>

       
    </div>
    
    </>)}
    </>
   
  )
}

export default Home