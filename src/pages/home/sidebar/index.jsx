import React, { useEffect, useState } from "react";
import "./index.css";
import Text from "../../../components/Text";
import AddNoteIcon from "../../../components/Add-note-icon";
import { avatarIntials } from "../../../utils";
import axios from "axios";
import { BASE_URL } from "../../../config/api";
import BasicModal from "../../../components/Modal";
import Button from "../../../components/Button";

const colors = [
  { color: "#B38BFA" },
  { color: "#FF79F2" },
  { color: "#43E6FC" },
  { color: "#F19576" },
  { color: "#0047FF" },
  { color: "#6691FF" },
];

const Sidebar = () => {
  const [groups, setGroups] = useState([]);
  const [open, setOpen] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleClose = () => setOpen(false);

  const handleCreateGroup = async () => {
    await axios.post(
      `${BASE_URL}/api/groups`,
      {
        name: groupName,
        color: selectedColor,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setGroupName("");
    setSelectedColor("");

    handleClose();
  };

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
  }, [groupName]);

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
        <AddNoteIcon onClick={() => setOpen(true)} />
      </div>
      <BasicModal open={open} handleClose={handleClose}>
        <div>
          <Text fontSize={29}>Create New Group</Text>
          <div className='display-input'>
            <Text fontSize={27}>Group Name</Text>
            <input
              type='text'
              placeholder='Enter Group Name'
              className='input'
              onChange={(e) => setGroupName(e.target.value)}
              value={groupName}
            />
          </div>
          <div className='display-input'>
            <Text fontSize={27}>Choose Color</Text>
            <div
              style={{ display: "flex", columnGap: "10px", marginTop: "20px" }}
            >
              {colors.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: item.color,
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    border:
                      item.color === selectedColor ? "2px solid black" : "none",
                  }}
                  onClick={() => setSelectedColor(item.color)}
                ></div>
              ))}
            </div>
          </div>
          <div className='button-container'>
            <Button onClick={handleCreateGroup}>Create</Button>
          </div>
        </div>
      </BasicModal>
    </div>
  );
};

export default Sidebar;
