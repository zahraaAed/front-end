import React, { useState } from "react";
import "../components/Filter.css";
import Product from "../pages/Product";
const Filter = ({ products }) => {
  const [selectedFlavors, setSelectedFlavor] = useState(null);
  const [filteredFlavors, setfilteredFlavors] = useState(null);
  const handleFlavorChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "All") {
      setSelectedFlavor(products); // Display all flavors
    } else {
      const filtered = products.filter(
        (product) =>
          product.flavours &&
          Array.isArray(product.flavours) &&
          product.flavours.some((flavor) => flavor === selectedValue)
      );
      setSelectedFlavor(filtered);

      // if (products.map((product) => product.flavour).map(
      //     (flavour) => flavour === selectedValue)) {
      //       const filteredFlavors = product;
      //     };
      //   setSelectedFlavor(filteredFlavors); // Display selected flavor
    }
  };
  console.log(products);

  return (
    <div className="filter">
      <select className="flavorSelect" onChange={handleFlavorChange}>
        <option value="All">All Flavors</option>
        {products
          .map((product) => product.flavours)
          .map((flavor) => (
            <option value={flavor}>{flavor}</option>
          ))}
      </select>
      {/* {selectedFlavors && (
        <section>
          {selectedFlavors.map(
            (flavor) =>
              flavor === products.flavours.map((flavour) => flavour) && (
                <div>
                  <h2>{products.productName}</h2>
                  <img src={products.images} alt={flavor.name} />
                  <p>Price: {products.price}</p>
                  <p>Description: {products.description}</p>
                </div>
              )
          )}
        </section>
      )} */}
      {selectedFlavors && (
        <section>
          {selectedFlavors.map((product) => (
            <div key={product.id}>
              {product.flavours.map((flavor, index) => (
                <li key={index}>{flavor}</li>
              ))}

              <h2>{product.productName}</h2>
              <img src={product.images} alt={product.productName} />
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              {/* Displaying the flavors */}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Filter;
