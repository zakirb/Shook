import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

const ShakeItem = data => {
  console.log('this is in the shake item', data)
  console.log('this is the user in the shake item', data.user)

  var proposer = ''
  var acceptor = ''
  if (data.data.proposer === data.user.userId) {
    proposer = data.user.username
  } else {
    proposer = data.user.userId
  }
  if (data.data.acceptor === data.user.userId) {
    acceptor = data.user.username
  } else {
    acceptor = data.user.userId
  }

  return (
    <CollapsibleItem className='shake-item' header={proposer + ' vs. ' + acceptor} icon='public'>
      <div>
        <p>The {data.data.type}:</p>
        <p>{data.data.proposal}</p>
      </div>
    </CollapsibleItem>
  )
}

export default ShakeItem;
