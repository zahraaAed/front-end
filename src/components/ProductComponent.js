const ProductComponent = ({ products, category }) => {
  return (
    <section>
      {products && (
        <div className="ProductComponent">
          <h4>{products.categoriesId}</h4>
          {products.images && (
            <img
              src={`http://localhost:4000/${products.images}`}
              alt={products.productName}
              style={{ maxWidth: "200px" }}
            />
          )}
          <h2>{products.productName}</h2>
          <p>{products.price}</p>
          <p>{products.description}</p>
          <p>{products.reviews}</p>
        </div>
      )}
    </section>
  );
};

export default ProductComponent;
