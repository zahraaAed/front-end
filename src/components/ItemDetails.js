const ItemDetails = ({ product }) => { //product props needs to be passed after placing it in item page
  console.log(product.productName, product.price,product.description, product.images)
  return (
    <section>
      <div className="itemDetails">
        {product.images && (
            <img className="product-review-images"
              src={`http://localhost:4000/${product.images}`}
              alt={product.productName}
            />
          )}
        <h4 className="product-price">Price {product.price}</h4>
        {/* <img src="../images/flavorIcons/strawberry.png" alt={product.flavours} /> will change later */}
        <h3>Description</h3>
        <p className="product-description">{product.description}</p>
      </div>
    </section>
  );
};

export default ItemDetails;