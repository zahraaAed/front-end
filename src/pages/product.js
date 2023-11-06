import React from "react";
import Header from "../components/Header";
import "../pages/product.css";
import Filter from "../components/Filter";
import SmallProduct from "../components/smallProduct";
import SmallProduct2 from "../components/icecream";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="title">
          <h1>Cakes & Icecream</h1>
        </div>
        <Filter />
        <div className="products">
          
            <div className="product1">
              <div className="title">
                <h4>Cakes</h4>
              </div>
              <div className="products-row">
                <SmallProduct />
                <SmallProduct />
              </div>
              </div>
            <div className="product1">
              <div className="title">
                <h4>Icecream</h4>
              </div>
              <div className="products-row">
                <SmallProduct2 />
                <SmallProduct2 />
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductPage;
