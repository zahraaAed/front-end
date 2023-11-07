import { useState } from "react";

const ReviewForm = () => {
  const [name, setCustomerName] = useState("");
  const [reviews, setReview] = useState("");
  const [productsId, setProductId] = useState("");
  const [error, setError] = useState(null);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const review = { name, reviews, productsId };
    const responseReview = await fetch("/api/reviewRoute/post", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "content-Type": "application/json",
      },
    });
    const jsonReview = await responseReview.json();
    if (!responseReview.ok) {
      setError(jsonReview.error);
    }
    if (responseReview.ok) {
      setCustomerName("");
      setReview("");
      setProductId("");
      setError(null);
      console.log("new review added", jsonReview);
    }
  };

  return (
    <>
      <form className="createReview" onSubmit={handleSubmitReview}>
        <h3>Add a review</h3>
        <label>Customer Name</label>
        <input
          type="text"
          onChange={(e) => setCustomerName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          onChange={(e) => setReview(e.target.value)}
          value={reviews}
        />
        <label>Product Id</label> {/* will be replaced by product._id when placed in item page */}
        <input
          type="text"
          onChange={(e) => setProductId(e.target.value)}
          value={productsId}
        />
        <button>Send</button>
        {error && <div className="ReviewAddError">{error}</div>}
      </form>
    </>
  );
};

export default ReviewForm;
