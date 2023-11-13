const ReviewDetails = ({ review }) => {
    return(
        <div className="review-details">
            <h4 className="review-name">
                {review.name}
            </h4>
            <p className="review-content">
                <strong>{review.reviews}</strong>
            </p>
        </div>
    )
}
export default ReviewDetails;