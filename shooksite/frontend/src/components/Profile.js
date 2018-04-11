import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import ShakeList from './ShakeList';
import UserBadge from './UserBadge';
import DataProvider from './DataProvider';
import auth from '../auth';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: null,
      username: null,
    }
  }

  componentDidMount() {
    console.log('yoooooooo')
    auth.getUser((res) => {
      console.log('This is the USER ID', res.id)
      this.setState({
        userId: res.id,
        username: res.username
      })
      console.log('This is the state now', this.state)
    })
    console.log('after get user function')
  }

  render() {

     return this.state.userId ? (
      <div>
        <Row>
          <Col s={4}>
            <DataProvider endpoint="/api/shakes/"
                          render={(data) => <ShakeList data={data} user={this.state} />} />
          </Col>
          <Col s={4}>
            <DataProvider endpoint="/api/shakes/"
                          render={(data) => <ShakeList data={data} user={this.state} />} />
          </Col>
          <Col s={4}>
            <UserBadge user={this.state} />
          </Col>
        </Row>
        <Button floating fab='horizontal' icon='mode_edit' className='red' large style={{bottom: '60px', right: '60px'}}>
          <Button floating icon='insert_chart' className='red'/>
          <Button floating icon='format_quote' className='yellow darken-1'/>
          <Button floating icon='publish' className='green'/>
          <Button floating icon='attach_file' className='blue'/>
        </Button>
      </div>
    ) : (
      <p>Loading...</p>
    )
  }
}

export default Profile;
