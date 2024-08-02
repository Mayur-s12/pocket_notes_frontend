import React from "react";
import "./index.css";

const Text = ({ children, fontSize, color, fontWeight, width }) => {
  return (
    <span
      style={{
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
        width: width,
        lineHeight: "22px",
      }}
      className='text'
    >
      {children}
    </span>
  );
};

export default Text;
