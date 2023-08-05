import React from "react";
import { Menubar } from "primereact/menubar";

function Navbar() {
  const items = [
    {
      label: "Home"
    },
    {
      label: "Team"
    },
    {
      label: "League"
    }
  ];

  return (
    <div className="navbar-container" style={{ position: "relative" }}>
      <Menubar model={items} />
      <span
        className="navbar-text"
        style={{ 
          position: "absolute", 
          right: "16px", 
          top: "50%", 
          transform: "translateY(-50%)", 
          fontFamily: "var(--font-family)",
          fontWeight: "bold",
        }}
      >
        A Game So Fine It's Played On Diamonds
      </span>
    </div>
  );
}

export default Navbar;
