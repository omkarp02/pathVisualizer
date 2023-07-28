import React from "react";

const Button = ({ text, size = "md", value, withCancel, ...otherProps }) => {
  return (
    <button className={`btn btn-primary btn-${size}`} {...otherProps}>
      {withCancel ? (!value ? text : "cancel") : text}
    </button>
  );
};

export default Button;
