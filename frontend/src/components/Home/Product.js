import React from 'react'
import {Link} from "react-router-dom"
import ReactStars from "react-rating-stars-component";


const options ={
  edit:false,
  color:"rgba(20,20,20,0.1)",
  size: window.innerWidth < 600 ? 20:25,
  value:2.5,
  isHalf:true 
}

const Product = ({product}) => {
  
  
  return (
   <>
   <Link className='productCard' to={`product/${product._id}`}>
    <img src="https://i.ibb.co/DRST11n/1.webp" alt={product.name} />
    <p>{product.name}</p>

    <div>
      <ReactStars {...options}/>
      <span>{product.name}</span>
      
      
    </div>
   </Link>

   </>
  )
}

export default Product