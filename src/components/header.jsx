import React from "react";
import "./style/header.css";
import "./style/navigationbar.css";
import NavigationBar from "./navigationbar";
const Header = () => {
  return (
    <header>
      <div>
        <div className="bg-image">
          <div className="navigationBar">
            <NavigationBar />
          </div>
        </div>
      </div>

      <div className="bg-text">
        <h1>VENUS SALOON</h1>
        <p>PROFESSIONAL HAIR DRESSER</p>
      </div>
    </header>
  );
};

export default Header;
