import React, { useState } from "react";
import "./index.css";
import { avatarIntials, formatDate } from "../../../../utils";
import SendIcon from "../../../../assets/send.svg";
import SendIconDisabled from "../../../../assets/disabledisabledSend.svg";
import Text from "../../../../components/Text";
import axios from "axios";
import { BASE_URL } from "../../../../config/api";

const NotesBar = ({ selectedGroup, notes }) => {
  const [noteContent, setNoteContent] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmitNote = async () => {
    if (noteContent.trim() === "") return;
    try {
      await axios.post(
        `${BASE_URL}/api/notes`,
        {
          content: noteContent,
          groupId: selectedGroup._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setNoteContent("");
      setIsDisabled(true);
    } catch (error) {
      console.error("Error sending note:", error);
    }
  };

  const handleContentChange = (e) => {
    const content = e.target.value;
    setNoteContent(content);
    setIsDisabled(content.trim() === "");
  };

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
          onChange={handleContentChange}
          value={noteContent}
        />
        <img
          className='send-icon'
          src={isDisabled ? SendIconDisabled : SendIcon}
          alt='send'
          onClick={handleSubmitNote}
          style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
        />
      </div>
    </div>
  );
};

export default NotesBar;
