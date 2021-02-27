import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="text-4xl text-blue-900 mt-8 mb-4 text-center">
        Contact
      </div>
      <div className="mx-10 md:mx-0">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
