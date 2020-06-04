import React, { useState, useEffect } from "react";
import "./style/navigationbar.css";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="topnav">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </div>
  );
};

export default NavigationBar;
