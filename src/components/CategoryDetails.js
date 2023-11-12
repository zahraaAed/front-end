import { Link } from "react-router-dom";

const CategoryDetails = ({ category }) => {

  return (
    <section className="category-item">
      <Link className="links" to="/">
        <img src={category.images} alt={category.categoryName} />
      </Link>
      <h4>{category.categoryName}</h4>
    </section>
  );
};

export default CategoryDetails;