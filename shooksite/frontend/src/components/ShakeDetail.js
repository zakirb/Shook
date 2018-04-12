import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Card } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import StatusEditForm from './StatusEditForm';
import auth from '../auth';

class ShakeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: ''
    }
  }

  componentDidMount() {
    auth.getUser((res) => {
      console.log('SHAKE DETAIL USER', res)
      this.setState({
        userId:res.id
      })
    })
  }



  // componentDidMount() {
  //   console.log('component mounted')
  //   axios({
  //     method: 'GET',
  //     url: '/api/shakes/'
  //     }).then( (res) => {
  //     console.log('SUCCESS GETTING DATA', res)
  //   })
  //   .catch( (err) => {
  //     console.log('ERROR', err)
  //   })
  // }
render () {
    return (
      <Row>
        <Col s={12}>
          <Row>
            <Col s={6}>
              <Card className='center'>
                <h3>{this.props.data.proposer}</h3>
              </Card>
            </Col>
            <Col s={6}>
              <Card className='center'>
                <h3>{this.props.data.acceptor}</h3>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col s={2}></Col>
            <Col s={8}>
              <Card className='center'>
                <h4>Shake Proposal</h4>
                <p className='shakeproposal'>
                  {this.props.data.proposal}
                </p>
                <h4>Shake Description</h4>
                <p className='shakedescription'>
                  {this.props.data.description}
                </p>
                <h6>Shake Status</h6>
                <Row>
                  <StatusEditForm data={this.props.data} userId={this.state.userId}/>
                </Row>
                <Button className='link-button' waves='light'>Complete this Shake!</Button>
                <br />
                <Button className='link-button' waves='light'>Delete this Shake</Button>
                <br />
                <Link to='/profile'>
                  <Button className='link-button' waves='light'> Back to Profile </Button>
                </Link>
              </Card>
            </Col>
            <Col s={2}></Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ShakeDetail;
