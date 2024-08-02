import React from "react";
import "./index.css";
import ImageToolBar from "./image-tool-bar";
import NotesBar from "./notes-bar";

const Mainbar = ({ selectedGroup, notes }) => {
  return (
    <div className='mainbar-container'>
      {!selectedGroup ? (
        <ImageToolBar />
      ) : (
        <NotesBar selectedGroup={selectedGroup} notes={notes} />
      )}
    </div>
  );
};

export default Mainbar;
