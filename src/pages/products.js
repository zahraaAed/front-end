import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
import "../pages/products.css";
import Filter from "../components/Filter";
// import SmallProduct from "../components/smallProduct";
import ProductComponent from "../components/ProductComponent";
// import chococake from "../images/chocolate-cake.jpg";
import strawberry from "../images/strawberry.png";
import chocoice from "../images/icecream.png";

const Products = () => {
  const [Product, setProduct] = useState("");
  const fetchProduct = async () => {
    const response = await fetch("/api/productRoute");
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
      <div className="product-content">
        <div className="products-title">
          <h1>Cakes & Icecream</h1>
        </div>
        {Product && <Filter products={Product} />}

        <div className="products">
          <div className="first-product">
            <div className="product-title">
              <h4>Cakes</h4>
            </div>
            <div className="small-product">
              <div className="product-description">
                <img
                  src={strawberry}
                  alt="strawberry cake"
                  className="product-image"
                />
                <div className="price">
                  <p> 10$</p>
                </div>
                <p>
                  {" "}
                  featuring fresh strawberries in a moist vanilla base with
                  strawberry-infused frosting.
                </p>
                <div className="review">
                  <p>Review by Oula wehbi:</p>
                  <p>Delicious treat.The cake was very amazing</p>
                </div>
              </div>
              <div className="product-description">
                {/* <img src={chococake} alt="cake" className="product-image" /> */}
                <div className="price">
                  <p> 20$</p>
                </div>

                <p>
                  featuring fresh strawberries in a moist vanilla base with
                  strawberry-infused frosting.
                </p>
                <div className="review">
                  <p>Review by moussa wehbi:</p>
                  <p>Delicious treat.The cake was very delicious</p>
                </div>
              </div>
            </div>
          </div>
          <div className="first-product">
            <div className="product-title">
              <h4>Icecream</h4>
            </div>
            <div className="small-product">
              <div className="product-description">
                <img
                  src={chocoice}
                  alt="choco icecream"
                  className="product-image"
                />
                <div className="price">
                  <p> 10$</p>
                </div>
                <p>
                  {" "}
                  featuring fresh strawberries in a moist vanilla base with
                  strawberry-infused frosting.
                </p>
                <div className="review">
                  <p>Review by Oula wehbi:</p>
                  <p>Delicious treat.The cake was very amazing</p>
                </div>
              </div>
            </div>

            <div className="product-description">
              <img src={chocoice} alt="icecream" className="product-image" />
              <div className="price">
                <p> 20$</p>
              </div>
              <p>
                {" "}
                featuring fresh strawberries in a moist vanilla base with
                strawberry-infused frosting.
              </p>
              <div className="review">
                <p>Review by moussa wehbi:</p>
                <p>Delicious treat.The cake was very delicious</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cake-title">
            <h4>Strawberry Cake</h4>
            <img className="product-image" src={strawberry} alt="" />
            <h4>Chocolate Ice Cream</h4>  
            <img className="product-image" src={chocoice} alt="" />
              </div>

              </div>

              {/* <h4>  {Product && Product.map((products)=>(
                  <ProductComponent key={products._id} products={products.categoriesid}/>
                ))
              }</h4> */}
      {/* {/*       </div> 
             <div className="products-row">
             {/* <SmallProduct />
                <SmallProduct /> */}
      {/* {Product &&
              Product.map((products) => (
              <ProductComponent key={products._id} products={products} />
            // ))} */}
    </>
  );
};

export default Products;
