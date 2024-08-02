import React from "react";
import "./index.css";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <div className='button' onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

export default Button;
