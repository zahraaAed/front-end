import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const BestSeller = () => {
const[products,setProducts] =useState([]);
  const fetchProduct = async () => {
    const response = await fetch(`/api/productRoute/`);
    if (response.status === 200) {
      const result = await response.json();
      setProducts(result);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);   
  return ( 
    <div className='products-container' >
         {products.map((product, index) => (
           product.bestSeller && <>

          <div className="products">
            <div className="products-content">
            <Link className="links" to={`/product/${product._id}`} >
              <img
                className="products-image"
                src={`http://localhost:4000/${product.images}`}
                alt="product"
              />
            </Link>
              <div className="products-name" key={index}>
                "{product.productName}"
              </div>
              <div className="products-description">{products.description}</div>
              <div className="products-price">{product.price}</div>
            </div>
          </div></>
        ))}


    </div>
  )
}

export default BestSeller