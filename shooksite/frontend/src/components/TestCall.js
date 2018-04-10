import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

const TestCall = (data) => {


  console.log(data)


    return (
      <div className='shake-item'>
        <h1>HELLO</h1>
        <p>p</p>
        <p>this is below the props</p>
      </div>
    )

  console.log({data})

  return (
    <div className='shake-item'>
      <h1>HELLO</h1>
      <p>{data}</p>
      <p>this is below the props</p>
    </div>
  )

}

export default TestCall;
