import React, { useEffect, useState } from "react";
import "./index.css";
import Sidebar from "./sidebar";
import Mainbar from "./mainbar";
import axios from "axios";
import { BASE_URL } from "../../config/api";

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setSelectedNotes] = useState([]);

  const fetchGroupDetails = async (groupId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/notes/${groupId}`);
      setSelectedNotes(response.data);
    } catch (error) {
      console.error("Error fetching group details", error);
    }
  };

  useEffect(() => {
    if (selectedGroup) {
      fetchGroupDetails(selectedGroup._id);
    }
  }, [selectedGroup]);

  return (
    <div className='home-container'>
      <Sidebar setSelectedGroup={setSelectedGroup} />
      <Mainbar selectedGroup={selectedGroup} notes={notes} />
    </div>
  );
};

export default Home;
