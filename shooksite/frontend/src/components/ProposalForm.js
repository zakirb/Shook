import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import axios from 'axios';

class ProposalForm extends Component {
  constructor(props) {
    super()
    this.state = {
      proposer: "",
      acceptor: "",
      description: "",
      type: "",
      proposal: ""
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let token = localStorage.token
    const { proposer, acceptor, description, type, proposal } = this.state;
    const Shake = { proposer, acceptor, description, type, proposal };
    const conf = {
      method: 'post',
      url: '/api/shakes/',
      data: Shake,
      headers: {
        Authorization: token
       }
    };
    axios(conf).then((res) => {
      console.log('SUCCESS');
    })
    .catch((err) => {
      console.log('ERROR', err)
    })
  };



  render() {
    const { proposer, acceptor, description, type, proposal } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>

          <div className="field">
            <label className="label">proposer id</label>
            <div className="control">
              <input className="input" type="text" name="proposer" onChange={this.handleChange} value={proposer} required />
            </div>
          </div>

          <div className="field">
            <label className="label">proposal</label>
            <div className="control">
              <textarea className="textarea" type="text" name="proposal" onChange={this.handleChange} value={proposal} required />
            </div>
          </div>

          <div className="field">
            <label className="label">type</label>
            <div className="control">
              <textarea className="text" type="text" name="type" onChange={this.handleChange} value={type} required />
            </div>
          </div>

          <div className="field">
            <label className="label">description</label>
            <div className="control">
              <textarea className="textarea" type="text" name="description" onChange={this.handleChange} value={description} required />
            </div>
          </div>

          <div className="field">
            <label className="label">acceptor id</label>
            <div className="control">
              <input className="input" type="text" name="acceptor" onChange={this.handleChange} value={acceptor} required />
            </div>
          </div>

          <div className="control">
            <button type="submit" className="button is-info">
              Create Shake
            </button>
          </div>

        </form>
      </div>
    );
  }
}
export default ProposalForm;
