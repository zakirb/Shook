import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShakeItem from './ShakeItem';

class ShakeList extends Component {
  render() {
    return (
      <Row>
        <Col className="center-align" s={6}>
          <h3>My Current Shakes: </h3>
          <div>
            <ul>
              <li>
                <ShakeItem />
              </li>
            </ul>
          </div>
        </Col>
        <Col className="center-align" s={6}>
          <h3>My Past Shakes: </h3>
          <div>
            <ul>
              <li>
                <ShakeItem />
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    )
  }
}

export default ShakeList;
