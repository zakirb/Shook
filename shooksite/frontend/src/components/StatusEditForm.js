import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Input } from "react-materialize";

class StatusEditForm extends Component {
  constructor(props) {
    super()
    this.state = {
      proposer_status: "",
      acceptor_status: ""
    }
  }


  componentWillReceiveProps (props) {
    console.log(props)
    this.setState({
      proposer_status: props.data[0].proposer_status,
      acceptor_status: props.data[0].acceptor_status
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("new state", this.state)
  };

  handleSubmit = e => {
    let token = localStorage.token
    e.preventDefault();
    const { proposer_status, acceptor_status } = this.state;
    const  shakeStatus = { 'proposer_status': proposer_status, 'acceptor_status': acceptor_status };
    const conf = {
      method: "post",
      url: '/api/shakes/edit/',
      data: shakeStatus,
      headers: {
        Authorization: token
      }
    };
    axios(conf).then( (res) => {
      console.log('SUCCESS', res)
    })
    .catch( (err) => {
      console.log('ERROR', err)
    })
  };

  render() {
    const { proposer_status, acceptor_status } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Input s={12} type='select' label="Materialize Select" name="acceptor_status" onChange={this.handleChange} defaultValue={'proposed'}>
            <option value={'proposed'}>proposed</option>
            <option value={'complete'}>complete</option>
            <option value={'break'}>break</option>
          </Input>
        </Row>
        <Row className="control">
          <button type="submit" className="button is-info">Edit Status</button>
        </Row >

      </form>
    );

    {/*return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Input s={12} type='select' label="Materialize Select" name="acceptor_value" onChange={this.handleChange} defaultValue='pending'>
            <option value={accept}>accept</option>
            <option value={complete}>complete</option>
            <option value={break}>break</option>
          </Input>
        </Row>
      </form>

    );*/}
  }
}
export default StatusEditForm;
