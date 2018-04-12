import React, { Component } from "react";
import { Collapsible, CollapsibleItem, Button, CollectionItem } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import auth from '../auth';

class ShakeItemGlobal extends Component {
  constructor(props){
    super(props)
    this.state = {
      proposer: null,
      acceptor: null,
    }
    console.log('sup fucks this is this', this)
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
      <CollectionItem>
        hey
        {/* <Icon left small>public</Icon> */}
        {/* {this.state.proposer} + ' vs. ' + {this.state.acceptor} */}
        {/* <p>The {this.props.data.type}:</p>
        <p>{this.props.data.proposal}</p> */}
      </CollectionItem>
    ) : (
      <CollectionItem>
       Loading...
      </CollectionItem>
    )
  }
}



export default ShakeItemGlobal;
