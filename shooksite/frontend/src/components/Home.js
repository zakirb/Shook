import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";

class Home extends Component {
  render() {
    return (
      <Row>
          <Col s={12}>
              <div>
                <p>Hero image goes here</p>
              </div>
              <div>
                <p>This will be a link to Login</p>
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
