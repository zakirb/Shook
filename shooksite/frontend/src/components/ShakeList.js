import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShakeItem from './ShakeItem';
// import './App.css';

class ShakeList extends Component {
  render() {
    return (
        <Col className="center-align" s={6}>
          <div className='shake-list'>
            <h4>This is a ShakeList</h4>
            <ul>
              <li>
                <ShakeItem />
              </li>
              <li>
                <ShakeItem />
              </li>
              <li>
                <ShakeItem />
              </li>
              <li>
                <ShakeItem />
              </li>
            </ul>
          </div>
        </Col>
    )
  }
}

export default ShakeList;
