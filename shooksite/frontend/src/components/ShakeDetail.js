import React from "react";
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ShakeDetail extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: '/api/shakes/'
    })
    .then( (res) => {
      console.log('SUCCESS', res)
    })
    .catch( (err) => {
      console.log('ERROR', err)
    })
  }

  render() {
    return (
      <Row>
          <Col s={12}>
        <Row>
          <Col s={6}>
            <div>User 1</div>
          </Col>
          <Col s={6}>
            <div>User 2</div>
          </Col>
        </Row>
        <Row>
          <Col s={8}>
            <div>Shake Proposal</div>
            <div>Description</div>
            {/* Shake Status - proposed, pending, complete
            Complete Button
            delete Button - request to delete */}
          </Col>
        </Row>
      </Col>
    </Row>
    )
  }
}

export default ShakeDetail;
