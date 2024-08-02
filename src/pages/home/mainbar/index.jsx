import React from "react";
import "./index.css";
import ImageToolBar from "./image-tool-bar";
import NotesBar from "./notes-bar";

const Mainbar = ({ selectedGroup }) => {
  return (
    <div className='mainbar-container'>
      {!selectedGroup ? (
        <ImageToolBar />
      ) : (
        <NotesBar selectedGroup={selectedGroup} />
      )}
    </div>
  );
};

export default Mainbar;
