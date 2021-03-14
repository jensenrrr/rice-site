import React from "react";
import ContactFooter from "../ContactFooter";

const ReviewFooter = () => {
  return (
    <ContactFooter
      borderColor={"border-gray-600"}
      hoverBorderColor={"border-blue-300"}
      textColor={"text-gray-600"}
      hoverTextColor={"text-blue-400"}
      containerClasses={"mt-6 mb-10"}
      text={"Leave a Review"}
      url={"/Contact/Review"}
    />
  );
};

export default ReviewFooter;
