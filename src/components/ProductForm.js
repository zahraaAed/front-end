//not working
import { useState } from "react";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [description, setProductdescription] = useState("");
  const [categoriesId, setProductCategoriesId] = useState("");
  const [flavours, setProductFlavours] = useState([]);
  const [bestSeller, setBestSeller] = useState(null);
  const [price, setProductPrice] = useState("");
  const [image, setProductImage] = useState("");

  const [error, setError] = useState(null);

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    const product = {
      productName,
      description,
      categoriesId,
      flavours,
      bestSeller,
      price,
      image,
    };
    const responseProduct = await fetch("/api/productRoute/post", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-Type": "application/json",
      },
    });
    const jsonProduct = await responseProduct.json();
    if (!responseProduct.ok) {
      setError(jsonProduct.error);
    }
    if (responseProduct.ok) {
      setProductName("");
      setProductdescription("");
      setProductCategoriesId("");
      setProductFlavours([]);
      setBestSeller(null);
      setProductPrice("");
      setProductImage("");
      setError(null);
      console.log("new product added", jsonProduct);
    }
  };

  return (
    <>
      <form className="createProduct" onSubmit={handleSubmitProduct}>
        <h3>Add a product</h3>
        <label>Product Name</label>
        <input
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <label>Product description</label>
        <input
          type="text"
          onChange={(e) => setProductdescription(e.target.value)}
          value={description}
        />
        <label>Product category</label>
        <input
          type="text"
          onChange={(e) => setProductCategoriesId(e.target.value)}
          value={categoriesId}
        />
        <label>Product flavours</label>
        <input
          type="text"
          onChange={(e) => setProductFlavours([e.target.value])}
          value={flavours}
        />
        <label>bestSeller</label>
        <input
          type="boolean"
          onChange={(e) => setBestSeller(e.target.value)}
          value={bestSeller}
        />
        <label>Price</label>
        <input
          type="text"
          onChange={(e) => setProductPrice(e.target.value)}
          value={price}
        />
        <label>Image</label>
        <input
          type="file"
          onChange={(e) => setProductImage(e.target.files[0])}
        />
        <button>Add Product</button>
        {error && <div className="ProductAddError">{error}</div>}
      </form>
    </>
  );
};

export default ProductForm;
