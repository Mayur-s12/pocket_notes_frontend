import React from "react";
import "./index.css";
import { avatarIntials, formatDate } from "../../../../utils";
import Text from "../../../../components/Text";

const NotesBar = ({ selectedGroup, notes }) => {
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
      <div className='notes-float'>
        {notes.map((item, index) => (
          <div className='note' key={index}>
            <Text fontSize={22}>{item.content}</Text>
            <div className='display-time'>
              <div>
                <Text fontSize={14}>{formatDate(item?.createdAt)}</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-send-notes'>
        <textarea
          className='input-class'
          type='text'
          placeholder='Enter Your Text Here....'
        />
      </div>
    </div>
  );
};

export default NotesBar;
