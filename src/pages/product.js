import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../pages/product.css";
import Filter from "../components/Filter";
// import SmallProduct from "../components/smallProduct";
// import SmallProduct2 from "../components/icecream";
// import component from "../components/ProductComponent";
import ProductComponent from "../components/ProductComponent";

const ProductPage = () => {
  const [Product, setProduct] = useState('');
  const fetchProduct = async () => {
    const response = await fetch("http://localhost:4001/api/productRoute");
    const json = await response.json();

    if (json.status === 200) {
      setProduct(json.data);
      console.log(json.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="title">
          <h1>Cakes & Icecream</h1>
        </div>
        {Product &&
        <Filter products={Product}/> }
        <div className="products">
          <div className="product1">
            <div className="title">
              <h4>Cakes</h4>

              {/* <h4>  {Product && Product.map((products)=>(
                  <ProductComponent key={products._id} products={products.categoriesid}/>
                ))
}</h4> */}
            </div>
            <div className="products-row">
              {/* <SmallProduct />
                <SmallProduct /> */}
              {Product &&
                Product.map((products) => (
                  <ProductComponent key={products._id} products={products} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
