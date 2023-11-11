// has to be sent by email
import { useState } from "react";
import "./feedbackForm.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    // const feedback = { feedback };
  };

  return (
    <>
      <form className="createFeedback" onSubmit={handleSubmitFeedback}>
        <div className="label-button">
          <label className="label">Feedback:</label>
          <input
            className="feedback-space"
            type="text"
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
          />
          <button className="feedback-button">Send</button>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
