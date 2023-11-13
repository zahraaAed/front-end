// // // has to be sent by email
// // import { useState } from "react";

// // const FeedbackForm = () => {
// //   const [feedback, setFeedback] = useState("");

// //   const handleSubmitFeedback = async (e) => {
// //     e.preventDefault();
// //     const feedback = { feedback };
// //     }

// //   return (
// //     <>
// //       <form className="createFeedback" onSubmit={handleSubmitFeedback}>
// //         <h3>Add a feedback</h3>
// //         <label>Feedback:</label>
// //         <input
// //           type="text"
// //           onChange={(e) => setFeedback(e.target.value)}
// //           value={feedback}
// //         />
// //         <button>Send</button>
// //       </form>
// //     </>
// //   );
// // };

// // export default FeedbackForm;

// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "../pages/feedbackForm.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_s591k8o",
//         "template_4m79bma",
//         form.current,
//         "aKSPLiR21-C5VyoX0"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("the feedback was successfully sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section>
//       <div className="createFeedback">
//         <form ref={form} onSubmit={sendEmail} className="form-feedback">
//           <textarea name="message" cols="30" rows="10"></textarea>
//           <button type="submit" className="submit">
//             submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useRef } from "react";
import "../pages/feedbackForm.css";
import emailjs from "@emailjs/browser";

const FeedbackForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s591k8o",
        "template_4m79bma",
        form.current,
        "aKSPLiR21-C5VyoX0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Feedback Successfully Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} className="createFeedback" onSubmit={sendEmail}>
        <div className="label-button">
          <label className="name-label">Your Name:</label>
          <div className="input-wrapper">
          <input name="user_name" type="text" className="feedback-name" />
          <label className="label">Feedback:</label>
          <input name="message" className="feedback-space" type="text" />
        </div>
        <div className="button-div">
          <button className="feedback-button">Send</button>
        </div>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
