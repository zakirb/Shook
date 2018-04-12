import React, { Component } from "react";
import {Row, Col, Button, Icon, Footer} from "react-materialize";
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
      <div>
        <Col s={12} className='center home'>
          <Hero />
            <div>
              <Link to='/login/'>
                <Button className='home-button' waves='light'> Login </Button>
              </Link>
            </div>
            <div>
              <Link to='/signup/'>
                <Button className='home-button' waves='light'> Signup </Button>
              </Link>
            </div>
        </Col>
        <Footer id='footer' copyrights="&copy 2015 Copyright Text"
          className='example'
          >
            <h5 className="white-text">Footer Content</h5>
        </Footer>
      </div>
    )
  }
}

export default Home;
