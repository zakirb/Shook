import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    username: "",
    password:""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user_login = { username, password };
    const conf = {
      method: "post",
      body: JSON.stringify(user_login),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="username"
                onChange={this.handleChange}
                value={username}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="password"
                onChange={this.handleChange}
                value={password}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
