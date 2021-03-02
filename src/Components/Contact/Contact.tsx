import React from "react";
import { useParams } from "react-router-dom";
import Background from "../Background";
import ContactForm, { ContactFormInput } from "./ContactForm";

const Contact = () => {
  let { defaultSubject }: { defaultSubject: string } = useParams();
  const contactFormParams: ContactFormInput = {};
  contactFormParams.contentType =
    defaultSubject === "Review"
      ? "Book Review"
      : defaultSubject === "Comment"
      ? "Blog Comment"
      : "Professional Inquiry";

  return (
    <Background>
      <div className="text-4xl text-blue-900 pt-8 mb-4 text-center">
        Contact
      </div>
      <div className="mx-10 md:mx-0">
        <ContactForm {...contactFormParams} />
      </div>
      <div className="pt-16"></div>
    </Background>
  );
};

export default Contact;
