import "./Contact.css";

const Contact = () => {
  //we can fetch data here if we decided to make the page dynamic
  return (
    <div className="Whole">
    <div className="Contact">
      <div className="title">
        <p className="contactTitle">Contact us</p>
        <p className="contactQuote">Sweet Dreams Start with a Message</p>
        <p className="quote">Let's Chat, Order, and Create Dessert Magic Together!</p>
      </div>
      <section className="feedback">feedback component goes here</section>
      <section className="footer">footer component goes here</section>
    </div>
    </div>


  )
}

export default Contact;