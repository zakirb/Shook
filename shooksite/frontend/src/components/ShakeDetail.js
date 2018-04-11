import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Card } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ShakeDetail = (data) => {

  console.log('retrieving data', data)

  // let shakes = data.data.map( (item, index) => {
  //   return (item, index)
  // })

  return (
    <Row>
      <Col s={12}>
        <Row>
          <Col s={6}>
            <Card className='center'>
              <h3>{data.user}</h3>
            </Card>
          </Col>
          <Col s={6}>
            <Card className='center'>
              <h3>User 2</h3>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={2}></Col>
          <Col s={8}>
            <Card className='center'>
              <h4>Shake Proposal</h4>
              <p className='shakeproposal'>{data.data.proposal}</p>
              <h4>Shake Description</h4>
              <p className='shakedescription'>{data.data.description}</p>
              <h6>Shake Status</h6>
              <p>{data.data.status}</p>
              <Button waves='light'>Complete this Shake!</Button>
              <br />
              <Button waves='light'>Delete this Shake</Button>
            </Card>
          </Col>
          <Col s={2}></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ShakeDetail;
