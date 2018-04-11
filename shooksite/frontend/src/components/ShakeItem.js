import React, { Component } from "react";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import auth from '../auth';
import ShakeDetail from './ShakeDetail';

class ShakeItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      proposer: null,
      acceptor: null,
    }
  }

  componentDidMount() {

    if (this.props.data.proposer === this.props.user.userId) {
      this.setState({
        proposer: this.props.user.username
      })
    } else {
      auth.getOtherUser(this.props.data.proposer, (res) => {
        this.setState({
          proposer: res.data.username
        })
      })
    }

    if (this.props.data.acceptor === this.props.user.userId) {
      this.setState({
        acceptor: this.props.user.username
      })
    } else {
      auth.getOtherUser(this.props.data.acceptor, (res) => {
        this.setState({
          acceptor: res.data.username
        })
      })
    }
  }

  render() {

    return (this.state.acceptor && this.state.proposer) ? (
      <CollapsibleItem className='shake-item' header={this.state.proposer + ' vs. ' + this.state.acceptor} icon='public'>
        <div>
          <p>The {this.props.data.type}:</p>
          <p>{this.props.data.proposal}</p>
      <Link to='/shakedetail'>
          <Button waves='light'> View Details </Button>
        </Link>
        </div>
      </CollapsibleItem>
    ) : (
      <p>Loading...</p>
    )
  }
}

export default ShakeItem;
