import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hero from './Hero';
import DataProvider from './DataProvider';
import TestCall from './TestCall';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row>
        <Col s={12} className='center'>
          <Hero />
            <div>
              <Link to='/login/'>
                <Button waves='light'> Login </Button>
              </Link>
            </div>
            <div>
              <Link to='/signup/'>
                <Button waves='light'> Signup </Button>
              </Link>
            </div>
            
        </Col>
      </Row>
    )
  }
}

export default Home;
