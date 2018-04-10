import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

class TestCall extends Component {
  constructor(props) {
    super()
    this.state = {
    }
  }


  render() {



    return (
      <div className='shake-item'>
        <h1>HELLO</h1>
        <p>{props.data}</p>
        <p>this is below the props</p>
      </div>
    )

  }



}

export default TestCall;
