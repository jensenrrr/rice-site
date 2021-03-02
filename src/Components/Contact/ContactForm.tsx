import React, { FC, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import "../Home/custom.css";
import { Redirect } from "react-router-dom";

interface ContactInfo {
  name?: string;
  email?: string;
  contentType?: "Professional Inquiry" | "Book Review" | "Blog Comment";
  content?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  content?: string;
}

function validateEmail(mail: string) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

export interface ContactFormInput {
  contentType?: "Professional Inquiry" | "Book Review" | "Blog Comment";
  partialFormClasses?: Partial<FormStyleClasses>;
}

interface FormStyleClasses {
  form: string;
  inputContainer: string;
  inputWrapper: string;
  input: string;
  inputError: string;
  pError: string;
  label: string;
  textArea: string;
  activeButton: string;
  inactiveButton: string;
}

const defaultFormClasses: FormStyleClasses = {
  form: "w-full max-w-lg mx-auto",
  inputContainer: "flex flex-wrap -mx-3 mb-6",
  inputWrapper: "w-full px-3",
  label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
  input:
    "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
  inputError: " border-red-500",
  pError: "text-red-500 text-xs italic",
  textArea:
    "no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",
  activeButton:
    "w-7/12 md:w-4/12 self-center bg-blue-500 hover:bg-blue-400 shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
  inactiveButton:
    "w-7/12 md:w-4/12 self-center mx-auto bg-blue-300 text-white font-bold py-2 px-4 rounded cursor-default",
};

const ContactForm: FC<ContactFormInput> = ({
  contentType = "Professional Inquiry",
  partialFormClasses = defaultFormClasses,
}) => {
  const formClasses: FormStyleClasses = {
    ...defaultFormClasses,
    ...partialFormClasses,
  };

  const [formData, setFormData] = useState<ContactInfo>({
    contentType: contentType,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const updateInput = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "name") {
      if (e.target.value === "" || null) {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "Please enter your name.",
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "",
        }));
      }
    } else if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "Please enter a valid email address.",
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "",
        }));
      }
    } else if (e.target.name === "content") {
      if (e.target.value === "" || null) {
        setFormErrors((prevState) => ({
          ...prevState,
          content: "Please type your message!",
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          content: "",
        }));
      }
    }
  };

  const validateForm = () =>
    !(!formData.name || !formData.content || formErrors.email);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()) {
      sendEmail();
      setFormData((prevState) => ({
        ...prevState,
        name: "",
        email: "",
        content: "",
      }));
    }
  };

  const sendEmail = () => {
    setLoading(true);
    axios
      .post("https://us-central1-rice-site.cloudfunctions.net/submit", formData)
      .then((res) => {
        setLoading(false);
        setSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const messagePlaceholder =
    formData.contentType === "Professional Inquiry"
      ? "Write your inquiry here!"
      : formData.contentType === "Book Review"
      ? "Write your review here!\n\nSoft Rules:\n\n\t1) Include one thing you DIDN'T like in your review.\n\n\t2) Include one thing you DID like in your review."
      : formData.contentType === "Blog Comment"
      ? "Question? Comment? Concern?\n\nWrite it here!"
      : "Choose a subject above!";

  return (
    <>
      <form className={formClasses.form} onSubmit={handleSubmit}>
        {loading || sent ? (
          <>
            <div id="lightbox" />

            {loading ? (
              <div className="absolute-center bg-white w-64 h-64 flex rounded-md">
                <div className="flex flex-col space-y-8 mx-auto self-center items-center">
                  <Spinner />
                  <div className="text-center text-xl text-blue-700">
                    Sending email!
                  </div>
                </div>
              </div>
            ) : null}
            {sent ? (
              <div className="absolute-center bg-white w-80 h-32 rounded-md">
                <div className="flex flex-col mx-auto h-full justify-between">
                  <div className="mx-5 mt-5 text-center text-xl text-blue-700">
                    {formData.contentType === "Professional Inquiry"
                      ? "Your inquiry has been sent!"
                      : formData.contentType === "Book Review"
                      ? "Thank you for the review!"
                      : "Thank you for the feedback!"}
                  </div>
                  <button
                    className="w-8/12 mx-auto mb-5 bg-blue-500 hover:bg-blue-400 shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    onClick={() => (setSent(false), setRedirect(true))}
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : null}
          </>
        ) : null}
        {redirect ? <Redirect to="/" /> : null}
        <div className={formClasses.inputContainer}>
          <label className={formClasses.label}>Name</label>
          <input
            className={
              formErrors.name
                ? formClasses.input + formClasses.inputError
                : formClasses.input
            }
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateInput}
            onBlur={validateInput}
            value={formData.name || ""}
          />
          {formErrors.name ? (
            <p className={formClasses.pError}>{formErrors.name}</p>
          ) : null}
        </div>
        <div className={formClasses.inputContainer}>
          <label className={formClasses.label}>E-mail</label>
          <input
            className={
              formErrors.email
                ? formClasses.input + formClasses.inputError
                : formClasses.input
            }
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            onBlur={validateInput}
            value={formData.email || ""}
          />

          {formErrors.email ? (
            <p className={formClasses.pError}>{formErrors.email}</p>
          ) : null}
        </div>
        <div className={formClasses.inputContainer}>
          <label className={formClasses.label}>Subject</label>
          <select
            className={formClasses.input}
            value={formData.contentType || ""}
            name="contentType"
            onChange={updateInput}
          >
            <option value="Professional Inquiry">Professional Inquiry</option>
            <option value="Book Review">Book Review</option>
            <option value="Blog Comment">Blog Comment</option>
          </select>
        </div>
        <div className={formClasses.inputContainer}>
          <div className={formClasses.label}>Message</div>
          <textarea
            className={
              formErrors.content
                ? formClasses.textArea + formClasses.inputError
                : formClasses.textArea
            }
            name="content"
            placeholder={messagePlaceholder}
            onChange={updateInput}
            onBlur={validateInput}
            value={formData.content || ""}
          />
          {formErrors.email ? (
            <p className={formClasses.pError}>{formErrors.content}</p>
          ) : null}
        </div>
        <div className="w-full flex">
          <button
            className={
              validateForm()
                ? formClasses.activeButton
                : formClasses.inactiveButton
            }
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
