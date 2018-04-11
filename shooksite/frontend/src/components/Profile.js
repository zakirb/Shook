import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import ShakeList from './ShakeList';
import UserBadge from './UserBadge';
import DataProvider from './DataProvider';
import auth from '../auth';
import StatusEditForm from './StatusEditForm';

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
      console.log('This is the USER ID', res.data.id)
      this.setState({
        userId: res.data.id,
        username: res.data.username
      })
      console.log('This is the state now', this.state)
    })
    console.log('after get user function')
  }

  render() {


    return (
      <div>
        <Row>
          <Col s={3}>
            <DataProvider endpoint="/api/shakes/"
                          render={(data) => <ShakeList data={data} user={this.state} />} />
          </Col>
          <Col s={3}>
            <DataProvider endpoint="/api/shakes/"
                          render={(data) => <ShakeList data={data} user={this.state} />} />
          </Col>
          <Col s={3}>
            <UserBadge />
          </Col>
          <Col s={3}>
            <StatusEditForm />
          </Col>

        </Row>
        <Button floating fab='horizontal' icon='mode_edit' className='red' large style={{bottom: '60px', right: '60px'}}>
          <Button floating icon='insert_chart' className='red'/>
          <Button floating icon='format_quote' className='yellow darken-1'/>
          <Button floating icon='publish' className='green'/>
          <Button floating icon='attach_file' className='blue'/>
        </Button>
      </div>
    )
  }
}

export default Profile;
