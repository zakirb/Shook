import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";

class Profile extends Component {
  render() {
    return (
      <Row>
        <Col s={4}>
          <div>
            <p>User\'s Shakes:</p>
          </div>
        </Col>
        <Col s={4}>
          <div>
            <p>Global Shakes:</p>
          </div>
        </Col>
        <Col s={4}>
          <div>
            <p>User\'s photo can be uploaded here:</p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Profile;
