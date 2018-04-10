import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";

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
    const { proposer, acceptor, description, type, proposal } = this.state;
    const Skake = { proposer, acceptor, description, type, proposal };
    const conf = {
      method: "post",
      body: JSON.stringify(Shake),
      headers: new Headers({ "Content-Type": "application/json" })
    };

  };



  render() {
    const { proposer, acceptor, description, type, proposal } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>

          <div className="field">
            <label className="label">proposer username</label>
            <div className="control">
              <input className="input" type="text" name="usernamename" onChange={this.handleChange} value={proposer} required />
            </div>
          </div>

          <div className="field">
            <label className="label">proposal</label>
            <div className="control">
              <textarea className="textarea" type="text" name="descriptiom" onChange={this.handleChange} value={proposal} required />
            </div>
          </div>

          <div className="field">
            <label className="label">type</label>
            <div className="control">
              <textarea className="textarea" type="text" name="descriptiom" onChange={this.handleChange} value={type} required />
            </div>
          </div>

          <div className="field">
            <label className="label">description</label>
            <div className="control">
              <textarea className="textarea" type="text" name="descriptiom" onChange={this.handleChange} value={description} required />
            </div>
          </div>

          <div className="field">
            <label className="label">accepter username</label>
            <div className="control">
              <input className="input" type="email" name="username" onChange={this.handleChange} value={accepter} required />
            </div>
          </div>

          <div className="control">
            <button type="submit" className="button is-info">
              Send message
            </button>
          </div>

        </form>
      </div>
    );
  }
}
export default ProposalForm;
