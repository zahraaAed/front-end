// has to be sent by email
import { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    const feedback = { feedback };
    }
 
  return (
    <>
      <form className="createFeedback" onSubmit={handleSubmitFeedback}>
        <h3>Add a feedback</h3>
        <label>Feedback:</label>
        <input
          type="text"
          onChange={(e) => setFeedback(e.target.value)}
          value={feedback}
        />
        <button>Send</button>
      </form>
    </>
  );
};

export default FeedbackForm;
