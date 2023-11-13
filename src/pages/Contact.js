import "./Contact.css";
import FeedBackForm from "../components/FeedbackForm";
const Contact = () => {
  //we can fetch data here if we decided to make the page dynamic
  return (
    <>
    <div className="contact">
      <div className="contact-body">
        <p className="contact-word">Contact us</p>
        <div className="content-quote">
          <p className="contact-content">Sweet Dreams Start with a Message</p>
          <p className="contact-quote">
            Let's Chat, Order, and Create Dessert Magic Together!
          </p>
        </div>
      </div>
    <FeedBackForm />
    </div>


    </>
  );
};

export default Contact;
