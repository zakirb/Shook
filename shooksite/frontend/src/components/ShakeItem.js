import React, { Component } from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import auth from '../auth'

var proposer = ''
var acceptor = ''

class ShakeItem extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('testing proposer', data.data.proposer, data.user.userId)
    if (data.data.proposer === data.user.userId) {
      proposer = data.user.username
    } else {
      auth.getOtherUser(data.data.proposer, (res) => {
        console.log('This is res.data.username', res.data.username)
        proposer = res.data.username
      })
      console.log("this is after the getOtherUser function, proposer", proposer)
    }

    console.log('testing acceptor', data.data.acceptor, data.user.userId)

    if (data.data.acceptor === data.user.userId) {
      acceptor = data.user.username
    } else {
      auth.getOtherUser(data.data.acceptor, (res) => {
        console.log('This is res.data.username', res.data.username)
        acceptor = res.data.username
      })
      console.log("this is after the getOtherUser function, acceptor", acceptor)
    }
  }

  render() {
    if (acceptor !== '' && proposer !== ''){
      return (
        <CollapsibleItem className='shake-item' header={proposer + ' vs. ' + acceptor} icon='public'>
          <div>
            <p>The {data.data.type}:</p>
            <p>{data.data.proposal}</p>
          </div>
        </CollapsibleItem>
      )
    }
  }


}

export default ShakeItem;
