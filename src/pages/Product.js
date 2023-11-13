import { useEffect, useState } from "react";
import "../pages/product.css";
import { useParams } from "react-router-dom";

//components
import ReviewDetails from "../components/ReviewDetails";
import ItemDetails from "../components/ItemDetails";
import ReviewForm from "../components/ReviewForm";

const Product = () => {
  const [product, setProduct] = useState("");
  const params = useParams();
  const paramsOfProduct = useParams();
  // console.log(paramsOfProduct);

  const fetchProduct = async () => {
    const response = await fetch(
      `/api/productRoute/product/${params.productId}`
    );
    if (response.status === 200) {
      const result = await response.json();
      setProduct(result);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const responseReviews = await fetch(
        `/api/reviewRoute/review/${params.productId}`
      );
      const json = await responseReviews.json();

      if (responseReviews.ok) {
        setReviews(json);
      }
    };
    fetchReviews();
  }, []);
  console.log(`this is product: ${product}`);
  return (
    <>
      <h1 className="item-review-name">{product.productName}</h1>
      <div className="product">
        
        <div className="leftside">
          <ItemDetails product={product} />
        </div>

        <div className="rightside">
          <h3>Reviews</h3>
          <div className="reviews">
            {reviews &&
              reviews.map((review) => (
                <ReviewDetails product={product} review={review} />
              ))}
          </div>
          <h3>
            <ReviewForm productId={params.productId} />
          </h3>
        </div>
      </div>
    </>
  );
};
export default Product;
