import React from "react";
import MainImg from "../../../../assets/image-removebg-preview 1.png";
import Text from "../../../../components/Text";
import "./index.css";

const ImageToolBar = () => {
  return (
    <div className='bar-container'>
      <img src={MainImg} alt='notes' />
      <Text fontSize={44}>Pocket Notes</Text>
      <Text fontSize={16} width={500}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </Text>
    </div>
  );
};

export default ImageToolBar;
