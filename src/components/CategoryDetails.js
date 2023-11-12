import{ Link } from 'react-router-dom';

const CategoryDetails = ({ category }) => {

  return (
    <section>
      <div className="categoryDetails">
      <Link className="links" to="/products">
        <img src="#" alt="image" />
        </Link>
        <Link className="links" to="/products">
        <h4>{category.categoryName}</h4>
        </Link>
      </div>
    </section>
  );
};

export default CategoryDetails;
