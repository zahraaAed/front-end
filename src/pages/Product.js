import { useEffect, useState } from "react";
import "../pages/product.css";
//components
import ReviewDetails from "../components/ReviewDetails";
import ItemDetails from "../components/ItemDetails";

const Product = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const responseReviews = await fetch("/api/reviews/");
      const json = await responseReviews.json();

      if (responseReviews.ok) {
        setReviews(json);
      }
    };
    fetchReviews();
  }, []);
  return (
    <div className="product">
      <h1>Item's Name</h1>
      <ItemDetails />
      <h3>Reviews</h3>
      <div className="reviews">
        {reviews &&
          reviews.map((review) => (
            <ReviewDetails key={review._id} review={review} />
          ))}
      </div>
      <h3>Add a Review</h3>
    </div>
  );
};
export default Product;
