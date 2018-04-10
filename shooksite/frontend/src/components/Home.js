import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row>
          <Col s={12}>
              <div>
                <p>Hero image goes here</p>
              </div>
              <div>
                <Link to='/login/'><p>This will be a link to Login</p></Link>
              </div>
              <div>
                <p>This will be a link to Signup</p>
              </div>
          </Col>
      </Row>
    )
  }
}

export default Home;
