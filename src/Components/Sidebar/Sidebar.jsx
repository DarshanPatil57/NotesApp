import React, { useState } from "react";
import "./Sidebar.css";
import { IoAddOutline } from "react-icons/io5";

export default function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(true);

  
  function handleToggle() {
    setListOpen(!listOpen);
  }

  return (
    <div className="sidebar">
      <div>
        <IoAddOutline className="icon" onClick={handleToggle} />
      </div>
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar-items"
            style={{ backgroundColor: item }}
            onClick={() =>props.addNote(item)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
