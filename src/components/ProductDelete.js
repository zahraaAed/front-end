import { useState } from "react";

const ProductDelete = ({products}) => {
  const [productName, setProductName] = useState("");
  const [error, setError] = useState(null);

  const handleDeleteProduct = async (e) => {
    try {
      e.preventDefault();
      const product = products.find((product) => product.productName === productName);
      // console.log(product)

      const responseProduct = await fetch("https://blooming-lb-7e6w.onrender.com/api/productRoute/delete/" + product._id, {
        method: "DELETE"
      });
      const jsonProduct = await responseProduct.json();
      if (!responseProduct.ok) {
        setError(jsonProduct.error);
      }
      if (responseProduct.ok) {
        setProductName("");
        setError(null);
        console.log("Product Deleted", jsonProduct);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form className="deleteProduct" onSubmit={handleDeleteProduct}>
        <h3>Delete a product</h3>
        <label>Product Name</label>
        <input
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <button>Delete Product</button>
        {error && <div className="ProductDeleteError">{error}</div>}
      </form>
    </>
  );
};

export default ProductDelete;
