const ItemDetails = ({ product }) => { //product props needs to be passed after placing it in item page

  return (
    <section>
      <div className="itemDetails">
        <h1>{product.productName}</h1>
        <img src={product.images} alt="product-image" />
        <h4>Price {product.price}</h4>
        <img src="../images/flavorIcons/strawberry.png" alt={product.flavours} /> {/* will change later */}
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default ItemDetails;