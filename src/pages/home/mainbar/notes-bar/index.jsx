import React from "react";
import "./index.css";
import { avatarIntials } from "../../../../utils";
import Text from "../../../../components/Text";

const NotesBar = ({ selectedGroup }) => {
  return (
    <div className='notes-bar-container'>
      <div className='header'>
        <div className='display-group'>
          <div
            style={{ backgroundColor: selectedGroup.color }}
            className='avatar'
          >
            {avatarIntials(selectedGroup.name)}
          </div>
          <Text>{selectedGroup.name}</Text>
        </div>
      </div>
      <div>main body</div>
      <div>text box</div>
    </div>
  );
};

export default NotesBar;
