import { useState } from "react";

const ReviewDelete = ({reviews}) => { //must rewrite it later in the right way, and to include the product id so it doesnt delete wrong review for same customer
  const [name, setCustomerName] = useState("");
  const [error, setError] = useState(null);

  const handleDeleteReview = async (e) => {
    if(window.confirm("are you sure you want to delete?")){
      try {
        e.preventDefault();
        const review = reviews.find((review) => review.name === name);
        // console.log(review)

        const responseReview = await fetch("/api/reviewRoute/delete/" + review._id, {
          method: "DELETE"
        });
        const jsonReview = await responseReview.json();
        if (!responseReview.ok) {
          setError(jsonReview.error);
        }
        if (responseReview.ok) {
          setCustomerName("");
          setError(null);
          console.log("Review Deleted", jsonReview);
        }
      } catch (error) {
        console.log(error);
      }
      document.getElementById("deleteReviewId").submit();
    }
  }

  return (
    <>
      <form className="deleteReview" id="deleteReviewId" onSubmit={handleDeleteReview}>
        <h3>Delete a review</h3>
        <label>Customer Name</label>
        <input
          type="text"
          onChange={(e) => setCustomerName(e.target.value)}
          value={name}
        />
        <button>Delete Review</button>
        {error && <div className="ReviewDeleteError">{error}</div>}
      </form>
    </>
  );
};

export default ReviewDelete;
