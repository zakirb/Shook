import React, { Component } from "react";
import {Row, Col, Button, Icon, Collapsible} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShakeItem from './ShakeItem';
// import './App.css';

const ShakeList = (data) => {

  console.log('hey there data', data.data)
  console.log('hey there state', data.user)

  let shakes = data.data.map( (item, index) => {
    return (<ShakeItem data={item} key={index} user={data.user} />)
  })


  return (
      <Col className="center-align column" s={6}>
        <h4>This is a ShakeList</h4>
        <div className='shake-list'>
          <Collapsible popout >
            {shakes}
          </Collapsible>
        </div>
      </Col>
  )

}

export default ShakeList;
