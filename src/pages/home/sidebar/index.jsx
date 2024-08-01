import React, { useEffect, useState } from "react";
import "./index.css";
import Text from "../../../components/Text";
import AddNoteIcon from "../../../components/Add-note-icon";
import { avatarIntials } from "../../../utils";
import axios from "axios";
import { BASE_URL } from "../../../config/api";

const Sidebar = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const response = await axios.get(`${BASE_URL}/api/groups`);
      try {
        setGroups(response.data);
      } catch (err) {
        console.log("err fetching groups:", err);
      }
    };

    fetchGroups();
  }, []);
  return (
    <div className='sidebar-container'>
      <Text>Pocket Notes</Text>
      <div className='scrollable-part'>
        {groups.map((item, index) => (
          <div key={index} className='list-item'>
            <div
              style={{ backgroundColor: `${item.color}` }}
              className='avatar-container'
            >
              {avatarIntials(item.name)}
            </div>
            <Text fontSize='24px'>{item.name}</Text>
          </div>
        ))}
      </div>
      <div className='icon-container'>
        <AddNoteIcon />
      </div>
    </div>
  );
};

export default Sidebar;
