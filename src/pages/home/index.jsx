import React from "react";
import "./index.css";
import Sidebar from "./sidebar";
import Mainbar from "./mainbar";

const Home = () => {
  return (
    <div className='home-container'>
      <Sidebar />
      <Mainbar />
    </div>
  );
};

export default Home;
