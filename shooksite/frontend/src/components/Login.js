import React, { Component } from 'react';
import auth from '../auth';

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
      e.preventDefault()
      auth.login(this.state.username, this.state.password, (loggedIn) => {
          if (loggedIn) {
              console.log(this.props.history.replace('/profile/'))
              console.log('LOGGED IN, history is above')
          }
      })
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" name='username' placeholder="username" value={username} onChange={this.handleChange}/>
          <input type="password" name='password' placeholder="password" value={password} onChange={this.handleChange}/>
          <input type="submit" />
      </form>
    )
  }
}
export default Login;
