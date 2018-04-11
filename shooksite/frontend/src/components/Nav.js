import React from "react";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import auth from '../auth';

const Nav = () => {

  let conditionalNav = (auth.loggedIn()) ? (
    <span>
      <Link id='propose-shake-link' className='navlinks' to='/proposeshake'>Propose a Shake</Link>
      <Link id="shakelist-link" className="navlinks" to="/shakelist">ShakeList</Link>
      <Link id="logout-link" className='navlinks' onClick={() => {
        auth.logout()
        document.getElementById('logout-link').style('display:none')
      }} className="navlinks" to="/">Logout</Link>
    </span>
    ) : (
      <Link id="login-link" className="navlinks" to="/login">Login</Link>
    )


  return (
    <div>
      <Navbar brand="Shook" right id="navbar">
        <Link id="home-link" className="navlinks" to="/">Home</Link>
        {conditionalNav}
      </Navbar>
    </div>
  )
}

export default Nav;
