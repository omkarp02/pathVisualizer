import React from "react";

const Button = ({ text, size = "md", value, withCancel, ...otherProps }) => {
  return (
    <button
      className="bg-gradient text-white contact-button border-0"
      {...otherProps}
    >
      {withCancel ? (!value ? text : "cancel") : text}
    </button>
  );
};

export default Button;
