import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import ShakeList from './ShakeList';
import UserBadge from './UserBadge';
import DataProvider from './DataProvider';
import TestCall from './TestCall';

class Profile extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={4}>
            <ShakeList />
          </Col>
          <Col s={4}>
            <ShakeList />
          </Col>
          <Col s={4}>
            <UserBadge />
          </Col>
        </Row>
        <Button floating fab='horizontal' icon='mode_edit' className='red' large style={{bottom: '60px', right: '60px'}}>
          <Button floating icon='insert_chart' className='red'/>
          <Button floating icon='format_quote' className='yellow darken-1'/>
          <Button floating icon='publish' className='green'/>
          <Button floating icon='attach_file' className='blue'/>
        </Button>
        {/* <DataProvider endpoint="api/shakes/"
                      render={(data) => <TestCall data={data} />} /> */}
      </div>
    )
  }
}

export default Profile;
