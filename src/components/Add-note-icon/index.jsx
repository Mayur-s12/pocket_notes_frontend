import React from "react";
import Plus from "../../assets/plus.svg";
import "./index.css";

const AddNoteIcon = ({ onClick, ...rest }) => {
  return (
    <div onClick={onClick} className='svg-wrapper' {...rest}>
      <img className='image' src={Plus} alt='add notes' />
    </div>
  );
};

export default AddNoteIcon;
