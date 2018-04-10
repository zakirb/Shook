import React from "react";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Navbar brand="Shook" right id="navbar">
        <Link id="home-link" className="navlinks" to="/">Home</Link>
        <Link id="profile-link" className="navlinks" to="/profile">Profile</Link>
        <Link id="shakelist-link" className="navlinks" to="/shakelist">ShakeList</Link>
      </Navbar>
    </div>
  )
}

export default Nav;
