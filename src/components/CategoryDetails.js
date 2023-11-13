import { Link } from "react-router-dom";

const CategoryDetails = ({ category }) => {

  return (
    <section className="category-item">
      <Link className="links" to={`/products/${category._id}`} >
        <img className="img" src={category.images} alt={category.categoryName} />
      </Link>
      <Link className="links" to="/products">
      <h4 className="category-headers">{category.categoryName}</h4>
      </Link>
    </section>
  );
};

export default CategoryDetails;