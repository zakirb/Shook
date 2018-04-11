import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Card } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ShakeDetail = (data) => {

  console.log('retrieving data', data)

  let shakes = data.data.map( (item, index) => {
    return (item, index)
  })

  return (
    <Row>
      <Col s={12}>
        <Row>
          <Col s={6}>
            <Card className='center'>
              <h3>User 1</h3>
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
              <p className='shakeproposal'>
                Lorem ipsum dolor amet air plant quinoa tacos, woke neutra post-ironic bespoke unicorn everyday carry etsy. Cred meh fam, ugh whatever meggings jean shorts sriracha. Cronut adaptogen farm-to-table fam enamel pin brooklyn everyday carry unicorn pork belly DIY poutine humblebrag. Forage yr photo booth cornhole, chambray lyft pinterest aesthetic keytar cold-pressed VHS ramps DIY. Next level crucifix gastropub kale chips snackwave, asymmetrical tumeric synth chambray. Forage aesthetic banjo roof party echo park. Food truck succulents squid mixtape, knausgaard slow-carb godard live-edge.
              </p>
              <h4>Shake Description</h4>
              <p className='shakedescription'>
                Lorem ipsum dolor amet air plant quinoa tacos, woke neutra post-ironic bespoke unicorn everyday carry etsy. Cred meh fam, ugh whatever meggings jean shorts sriracha. Cronut adaptogen farm-to-table fam enamel pin brooklyn everyday carry unicorn pork belly DIY poutine humblebrag. Forage yr photo booth cornhole, chambray lyft pinterest aesthetic keytar cold-pressed VHS ramps DIY. Next level crucifix gastropub kale chips snackwave, asymmetrical tumeric synth chambray. Forage aesthetic banjo roof party echo park. Food truck succulents squid mixtape, knausgaard slow-carb godard live-edge.
              </p>
              <h6>Shake Status</h6>
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
