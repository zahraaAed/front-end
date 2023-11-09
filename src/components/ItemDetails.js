const ItemDetails = ({ product }) => { //product props needs to be passed after placing it in item page

  return (
    <section>
      <div className="itemDetails">
        <h1>{product.productName}</h1>
        {product.images && (
            <img
              src={`http://localhost:4001/${product.images}`}
              alt={product.productName}
              style={{ maxWidth: "200px" }}
            />
          )}
        <h4>Price {product.price}</h4>
        <img src="../images/flavorIcons/strawberry.png" alt={product.flavours} /> {/* will change later */}
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default ItemDetails;