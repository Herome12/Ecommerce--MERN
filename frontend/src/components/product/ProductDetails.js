  import React ,{useEffect,useState} from 'react'
  import { useDispatch,useSelector } from 'react-redux'
  import "./productDetails.css"
  import { useParams } from 'react-router-dom'
  import { productDetails } from '../../action/productAction'
  import { Fragment } from 'react'
  import Carousel from "react-material-ui-carousel";
  import ReactStars from "react-rating-stars-component";
  import Loader from '../layout/loading/loader'
  import MetaData from '../layout/MetaData'
  import ReviewCard from "./ReviewCard" 
  import { addItemCart } from '../../action/cartAction'
  import { useNavigate } from 'react-router-dom'
  const options ={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    size: window.innerWidth < 600 ? 20:25,
    value:2.5,
    isHalf:true 
  }
  
  
  
  
  const ProductDetails =   () => {
    
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, product} = useSelector((state)=> state.productDetails)
    
  
   const [quantity, setquantity] = useState(1)
    
   const increment =()=>{
    if(product.Stock<=quantity) return
    const qty = quantity+1

    setquantity(qty)
   }
    
   const decrement= ()=>{
    if(1>=quantity) return
    const qty = quantity-1
    setquantity(qty)
   }
   console.log(quantity)
  const addToCartHandler=()=>{
    dispatch(addItemCart(id,quantity))
    navigate("/cart")
    
  }
    
    useEffect(() => {
      dispatch(productDetails(id))
       
    }, [dispatch, id]);
    
    
    
    
      return (
      <>
      {loading ?(<Loader/>):(
        <Fragment>
           <MetaData title={product &&`${product.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product &&
                  product.Images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product && product.name}</h2>
                <p>Product # {product && product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product && product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{product&&`₹${product && product.prices}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decrement}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increment}> +</button>
                  </div>
                  <button
                    disabled={product&& product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product && product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product && product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product && product.description}</p>
              </div>

              <button  className="submitReview">
                Submit Review
              </button>
            </div>
          </div>
          <h3 className="reviewsHeading">
            REVIEWS
          </h3>
          {/* {product && product.reviews.map((review)=>(<ReviewCard review = {review}/>))} */}
        </Fragment>
     
     )}
      </> 

     
 
      
      
    )
  }

  export default ProductDetails;