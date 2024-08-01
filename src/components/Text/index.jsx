import React from "react";
import "./index.css";

const Text = ({ children, fontSize, color, fontWeight }) => {
  return (
    <span
      style={{ fontSize: fontSize, color: color, fontWeight: fontWeight }}
      className='text'
    >
      {children}
    </span>
  );
};

export default Text;
