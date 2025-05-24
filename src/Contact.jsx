import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>For any questions or inquiries, please email:</p>
        <a href="mailto:ttanaka28@amherst.edu" className="email-link">
          ttanaka28@amherst.edu
        </a>
      </div>
    </section>
  );
};

export default Contact;