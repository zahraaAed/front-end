import React, { useState, useEffect } from "react";
import "../pages/products.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  const params =useParams()
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/productRoute/category/${params.categoryId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="products-container">
        {Product.map((products, index) => (
          <div className="products">
            <div className="products-content">
            <Link className="links" to={`/product/${products._id}`} >
              <img
                className="products-image"
                src={`http://localhost:4000/${products.images}`}
              />
            </Link>
              <div className="products-name" key={index}>
                "{products.productName}"
              </div>
              <div className="products-description">{products.description}</div>
              <div className="products-price">{products.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
