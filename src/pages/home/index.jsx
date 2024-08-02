import React, { useState } from "react";
import "./index.css";
import Sidebar from "./sidebar";
import Mainbar from "./mainbar";

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div className='home-container'>
      <Sidebar setSelectedGroup={setSelectedGroup} />
      <Mainbar selectedGroup={selectedGroup} />
    </div>
  );
};

export default Home;
