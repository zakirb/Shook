import React from "react";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

const ShakeItem = (data) => {
  console.log(data)
  
  return (
    <div className='shake-item'>
      <p>This is a shake item!</p>
    </div>
  )
}

export default ShakeItem;
