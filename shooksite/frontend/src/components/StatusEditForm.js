import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Input } from "react-materialize";

class StatusEditForm extends Component {
  constructor(props) {
    super()
    console.log(props)
    this.state = {
      proposer_status: "accepted",
      acceptor_status: "accepted",
      id: 4
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('Get derived state from props nextProps', nextProps)
    console.log('Get derived state from props prevState', prevState)
    // this.setState({
    //   proposer_status: this.props.data[0].proposer_status,
    //   acceptor_status: this.props.data[0].acceptor_status,
    //   id: this.props.data[0].id
    // })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleSubmit = e => {
    let token = localStorage.token
    e.preventDefault();
    const { proposer_status, acceptor_status, id } = this.state;
    const  shakeStatus = { 'proposer_status': proposer_status, 'acceptor_status': acceptor_status, 'id': id };
    console.log('this is the shake status', shakeStatus)
    const conf = {
      method: 'PUT',
      url: `/api/shakes/${id}/`,
      data: shakeStatus,
      headers: {
        Authorization: "Token " + `${token}`
      }
    };
    console.log('This is handling the submit', conf)
    axios(conf).then( (res) => {
      console.log('SUCCESS', res)
    })
    .catch( (err) => {
      console.log('ERROR', err)
    })
  };

  render() {
    const { proposer_status, acceptor_status, id } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Input s={12} type='select' name='acceptor_status' onChange={this.handleChange} defaultValue={'---'}>
            <option value={'---'} disabled>---</option>
            <option value={'completed'}>Completed</option>
            <option value={'abandoned'}>Abandoned</option>
          </Input>
          <input type='hidden' value={4} name='id' />
        </Row>
        <Row className="control">
          <button type="submit" className="button is-info">Edit Status</button>
        </Row>

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
