import React,{useEffect,Fragment} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { getProduct } from '../../action/productAction';
import Product  from '../Home/Product';
import Loader from '../layout/loading/loader';

const Products = () => {
 
const dispatch = useDispatch();
const {product,loading} = useSelector((state)=>state.products)

 
useEffect(() => {
   dispatch(getProduct()) 
}, [dispatch])
 
 
 
 
    return (
    <Fragment>
     {loading?(<Loader/>):(
      <>
      {product && product.map((product)=>(<Product product={product}/>))}
      </>
     )}
    </Fragment>
    
  )
}

export default Products